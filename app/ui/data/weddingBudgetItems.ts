export interface WeddingBudgetCagegory {
    category: string;
    items: WeddingBudgetItem[];
}

export interface WeddingBudgetItem {
    name: string;
    description?: string;
    min: number;
    max: number;
    step: number;
    marks?: Record<number, string>;
    initial?: {
        use?: boolean;
        value?: number;
    };
}

export const WEDDING_PROFIT_CATEGORIES: WeddingBudgetCagegory[] = [
    {
        category: "축의금/기타",
        items: [
            {
                name: "축의금",
                min: 0,
                max: 1000,
                step: 10,
                marks: { 279: "평균" },
                description: "축의금 평균 인당 8만원",
                initial: { value: 2232 },
            },
            { name: "기타", min: 0, max: 1000, step: 10 },
        ],
    },
];

export const WEDDING_COST_CATEGORIES: WeddingBudgetCagegory[] = [
    {
        category: "상견례",
        items: [
            { name: "식사", min: 0, max: 100, step: 1, marks: { 50: "평균" }, initial: { value: 50 } },
            { name: "선물", min: 0, max: 100, step: 1, marks: { 30: "평균" } },
        ],
    },
    {
        category: "스드메",
        items: [
            {
                name: "스드메",
                min: 0,
                max: 1000,
                step: 10,
                marks: { 360: "평균" },
                description: "스튜디오, 드레스, 메이크업을 패키지로<br/>보통 웨딩 플래너와 계약한다",
                initial: { value: 360 },
            },
        ],
    },
    {
        category: "예식장",
        items: [
            { name: "대관/식대", min: 0, max: 3000, step: 10, marks: { 1690: "평균" }, initial: { value: 1690 } },
            { name: "사회자", min: 0, max: 100, step: 1, marks: { 30: "평균" }, initial: { value: 30 } },
            { name: "주례", min: 0, max: 100, step: 1, marks: { 20: "평균" } },
            { name: "축가", min: 0, max: 100, step: 1, marks: { 20: "평균" }, initial: { value: 20 } },
            {
                name: "가방순이",
                min: 0,
                max: 100,
                step: 1,
                marks: { 20: "평균" },
                description: "결혼식 당일에 신부의 가방을 맡아서 들어주는 역할을 하는 지인",
            },
            {
                name: "본식 스냅/DVD",
                min: 0,
                max: 200,
                step: 5,
                marks: { 140: "평균" },
                description: "결혼식 당일 촬영한 스냅 사진과 영상",
            },
            {
                name: "플라워 샤워",
                min: 0,
                max: 100,
                step: 1,
                marks: { 30: "평균" },
                description: "신랑,신부 퇴장시 꽃잎을 뿌리는 행사",
            },
            { name: "꽃장식", min: 0, max: 1000, step: 10, marks: { 300: "평균" } },
            { name: "웨딩 케이크", min: 0, max: 100, step: 1, marks: { 50: "평균" } },
            {
                name: "음악 연주",
                min: 0,
                max: 100,
                step: 1,
                marks: { 50: "평균" },
                description: "결혼식 당일 음악 연주를 해주는 밴드나 연주자",
            },
            {
                name: "폐백/이바지",
                min: 0,
                max: 100,
                step: 1,
                marks: { 30: "평균" },
                description:
                    "폐백은 결혼식 후 신부가 신랑 측에 음식과 절을 드리는 행사<br/>이바지는 신부의 집에서 신랑 측에 보내는 음식",
            },
            {
                name: "식전 영상",
                min: 0,
                max: 100,
                step: 1,
                marks: { 10: "평균" },
                description: "결혼식 시작 전에 하객들에게 보여주는 짧은 영상",
            },
            { name: "부케", min: 0, max: 100, step: 1, marks: { 30: "평균" }, initial: { value: 30 } },
            {
                name: "포토테이블",
                min: 0,
                max: 100,
                step: 1,
                marks: { 30: "평균" },
                description: "결혼식장 입구에 신랑,신부의 사진이 걸려있는 테이블",
            },
            {
                name: "웨딩카",
                min: 0,
                max: 100,
                step: 1,
                marks: { 30: "평균" },
                description: "결혼식 당일 신랑,신부가 이동할 때 사용하는 차량",
            },
        ],
    },
    {
        category: "예복",
        items: [
            {
                name: "드레스 투어",
                min: 0,
                max: 100,
                step: 1,
                marks: { 15: "평균" },
                description: "드레스 샵에서 여러 드레스를 입어보는 비용",
                initial: { value: 15 },
            },
            {
                name: "드레스 추가비용",
                min: 0,
                max: 100,
                step: 1,
                marks: { 30: "평균" },
                description: "기본 드레스보다 고급 드레스를 선택한 경우",
            },
            {
                name: "드레스 헬퍼",
                min: 0,
                max: 100,
                step: 1,
                marks: { 50: "평균" },
                description: "드레스를 잡아주고 전체적으로 도와주는 역할",
                initial: { value: 50 },
            },
            { name: "웨딩 슈즈", min: 0, max: 100, step: 1, marks: { 20: "평균" } },
            { name: "신랑 예복", min: 0, max: 200, step: 5, marks: { 80: "평균" }, initial: { value: 80 } },
            { name: "신랑 구두", min: 0, max: 100, step: 1, marks: { 30: "평균" } },
            { name: "신랑,신부 한복", min: 0, max: 200, step: 5, marks: { 80: "평균" }, initial: { value: 80 } },
            { name: "어머님 한복", min: 0, max: 200, step: 5, marks: { 100: "평균" }, initial: { value: 100 } },
            { name: "아버님 예복", min: 0, max: 200, step: 5, marks: { 100: "평균" }, initial: { value: 100 } },
            { name: "가족 예복", min: 0, max: 200, step: 5, marks: { 100: "평균" } },
        ],
    },
    {
        category: "메이크업/헤어",
        items: [
            {
                name: "메이크업 추가금",
                min: 0,
                max: 100,
                step: 1,
                marks: { 20: "평균" },
                description: "실장님을 지정한 경우 추가비용 발생",
            },
            { name: "혼주/가족", min: 0, max: 100, step: 1, marks: { 60: "평균" } },
            {
                name: "헤어변형",
                min: 0,
                max: 100,
                step: 1,
                marks: { 30: "평균" },
                description: "결혼식이나 촬영시 헤어를 만져주는 역할",
            },
        ],
    },
    {
        category: "웨딩 촬영",
        items: [
            {
                name: "원본/수정본",
                min: 0,
                max: 100,
                step: 1,
                marks: { 50: "평균" },
                description: "촬영 원본과 수정본을 받는 경우 추가비용 발생",
                initial: { value: 50 },
            },
            { name: "앨범 및 액자", min: 0, max: 100, step: 1, marks: { 30: "평균" } },
            {
                name: "야외 스냅 사진",
                min: 0,
                max: 500,
                step: 10,
                marks: { 300: "평균" },
                description: "야외에서 촬영하는 스냅 사진으로 제주도가 대표적",
            },
        ],
    },
    {
        category: "청첩장",
        items: [
            { name: "청첩장 제작", min: 0, max: 100, step: 1, marks: { 15: "평균" }, initial: { value: 15 } },
            {
                name: "청첩장 모임",
                min: 0,
                max: 200,
                step: 5,
                marks: { 80: "평균" },
                description: "청첩장을 전달하는 모임",
                initial: { value: 80 },
            },
        ],
    },
    {
        category: "예물/예단",
        items: [
            {
                name: "예물",
                min: 0,
                max: 2000,
                step: 10,
                marks: { 673: "평균" },
                description: "신랑, 신부가 서로에게 주는 선물",
                initial: { value: 673 },
            },
            {
                name: "예단",
                min: 0,
                max: 2000,
                step: 10,
                marks: { 758: "평균" },
                description:
                    "신부가 신랑측에 드리는 예물로 대표적으로<br/> 침구,반상기,은수저의 현물 예단이나 현금을 드리기도 함",
            },
        ],
    },
    {
        category: "결혼식 이후",
        items: [
            { name: "신혼여행", min: 0, max: 2000, step: 10, marks: { 725: "평균" }, initial: { value: 725 } },
            {
                name: "지인 답례품",
                min: 0,
                max: 200,
                step: 5,
                marks: { 100: "평균" },
                description: "결혼식에 참석한 지인들에게 주는 선물",
            },
        ],
    },
    {
        category: "집 관련",
        items: [
            {
                name: "혼수",
                min: 0,
                max: 3000,
                step: 10,
                marks: { 1564: "평균" },
                description: "신혼집을 꾸미기 위한 가구, 가전제품 등을 구입하는 비용",
                initial: { value: 1564 },
            },
            {
                name: "신혼집",
                min: 0,
                max: 30000,
                step: 100,
                marks: { 24300: "평균" },
                description: "신혼집을 임대하거나 구입하는 비용",
            },
        ],
    },
];
