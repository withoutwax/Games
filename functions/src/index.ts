import * as admin from "firebase-admin";
// v2용 트리거 가져오기
import {onDocumentCreated} from "firebase-functions/v2/firestore";

// 1. 두 라이브러리 모두 가져오기
// eslint-disable-next-line @typescript-eslint/no-var-requires
const FilterKo = require("badwords-ko");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const FilterEn = require("bad-words");

admin.initializeApp();

// 2. 각각 인스턴스 생성
const filterKo = new FilterKo();
const filterEn = new FilterEn();

// 2세대(v2) 스타일의 트리거 정의
export const sanitizeHighScore = onDocumentCreated(
  "games/click/highscores/{docId}",
  async (event) => {
    // 1. 저장된 데이터 가져오기 (v2에서는 event.data가 스냅샷입니다)
    const snapshot = event.data;

    // 데이터가 없는 경우(삭제 등) 방어 코드
    if (!snapshot) {
      return;
    }

    const data = snapshot.data();
    const originalName = data.name || "Anonymous";

    // 2. [이중 필터링 로직]
    // 1차: 영어 욕설 필터링 (Sh*t 등 처리)
    const tempName = filterEn.clean(originalName);

    // 2차: 한국어 욕설 필터링 (1차 결과물을 받아서 다시 처리)
    const finalName = filterKo.clean(tempName);

    // 3. 로그 남기기
    console.log(`[Double Filter v2] ${originalName} -> ${finalName}`);

    // 4. 필터링된 이름을 'cleanName' 필드에 업데이트
    return snapshot.ref.update({
      cleanName: finalName,
      filteredAt: admin.firestore.FieldValue.serverTimestamp(),
    });
  },
);
