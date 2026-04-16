# 민화 호랑이 비대칭 지각 설문 (Pilot Study)

**Controllable Imperfection: Reproducing Asymmetry and Proportion Distortion in Traditional Art with Generative Models**

---

## 연구 개요

한국 및 일본의 전통 호랑이 그림 50점을 대상으로, 일반인이 호랑이 얼굴의 **비대칭·왜곡·미적 매력**을 어떻게 지각하는지를 측정하는 파일럿 설문입니다.

수집된 응답 데이터는 생성형 AI 모델의 학습 라벨로 활용되며, 와비사비(Wabi-Sabi) 미학 기반의 **의도적 불완전함(Controllable Imperfection)** 을 AI 이미지 생성에 적용하는 박사 연구의 일부입니다.

---

## 설문 구성

| 항목 | 내용 |
|------|------|
| 이미지 수 | 50장 (한국·일본 전통 호랑이 그림) |
| 문항 수 | 이미지당 3문항 |
| 척도 | 5점 리커트 척도 |
| 소요 시간 | 약 10~15분 |

**측정 문항**
- Q1. 이 호랑이 얼굴은 좌우 균형이 잘 맞아 보인다.
- Q2. 이 호랑이 얼굴은 형태적으로 왜곡되어 보인다.
- Q3. 이 호랑이 얼굴은 예술적으로 매력적이다.

---

## 데이터 수집

- 응답 데이터는 Google Sheets에 실시간 저장
- 익명 처리 (participant ID 자동 생성)
- 저장 컬럼: `participant_id`, `timestamp`, `contact`, `img01_balanced` ~ `img50_artistic`

---

## 기술 스택

- HTML / CSS / Vanilla JS (단일 파일, 외부 라이브러리 없음)
- Google Apps Script (데이터 수집 API)
- GitHub Pages (배포)

---

## 관련 연구

- Saito, Y. (1997). The Japanese aesthetics of imperfection and insufficiency. *The Journal of Aesthetics and Art Criticism*, 55(4), 377–385.
- Saito, Y. (2017). The role of imperfection in everyday aesthetics. *Contemporary Aesthetics*, 15(1).
- Sanctus, J., & Varda, S. (2026). Imperfection as a constitutive property of artificial intelligence. *AI & SOCIETY*, 1–10.

---

## 문의

김예은 · 이화여자대학교 미디어인터랙션 디자인 박사과정
