// lib/types.ts

export type Status = "SUBMITTED" | "APPROVED" | "REJECTED" | "RESOLVED";

export type Job = {
  id: string;
  title: string;
  department: string;
  postedDate: string;
  salaryRange: string;
  referralCount?: number;
  status: Status;
};

export type Referral = {
  id: string;
  jobId: string;
  employeeName: string;
  employeeJobTitle: string;
  employeeDepartment: string;
  submittedDate: string;
  candidateName: string;
  status: Status;
};

export type ReferralDetail = {
  id: string;

  employeeName: string;
  employeePhone: string;
  employeeEmail: string;
  employeeDepartment: string;
  employeeJobLevel: string;
  employeeJobType: string;
  relationshipWithCandidate: string;
  referralReason: string;
  consentReceived: boolean;
  currentlyWorking: boolean;

  candidateName: string;
  candidatePhone: string;
  candidateEmail: string;
  candidateLinkedIn?: string;
  candidateCurrentEmployment: string;
  candidateInterestedField?: string;
  cvUrl?: string;

  submittedDate: string;
  status: Status;
};

// Status helpers
export const statusColors: Record<Status, string> = {
  SUBMITTED: "blue",
  APPROVED: "green",
  REJECTED: "red",
  RESOLVED: "gray",
};

export const statusLabels: Record<Status, string> = {
  SUBMITTED: "Шинэ",
  APPROVED: "Зөвшөөрсөн",
  REJECTED: "Татгалзсан",
  RESOLVED: "Шийдэгдсэн",
};

// ================= MOCK JOBS =================
export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior Software Engineer",
    department: "Технологийн хэлтэс",
    postedDate: "2026-01-01",
    salaryRange: "₮3,000,000 - ₮5,000,000",
    referralCount: 3,
    status: "SUBMITTED",
  },
  {
    id: "2",
    title: "Product Manager",
    department: "Бүтээгдэхүүний хэлтэс",
    postedDate: "2026-01-02",
    salaryRange: "₮3,500,000 - ₮5,500,000",
    referralCount: 1,

    status: "SUBMITTED",
  },
  {
    id: "3",
    title: "UX Designer",
    department: "Дизайны алба",
    postedDate: "2026-01-05",
    salaryRange: "₮2,500,000 - ₮4,000,000",
    status: "RESOLVED",
  },
  {
    id: "4",
    title: "Data Analyst",
    department: "Өгөгдлийн алба",
    postedDate: "2026-01-03",
    salaryRange: "₮3,000,000 - ₮4,500,000",
    status: "RESOLVED",
  },
];

// ================= MOCK REFERRALS =================
export const mockReferrals: Referral[] = [
  {
    id: "1",
    jobId: "1",
    employeeName: "Болд Бат",
    employeeJobTitle: "Software Engineer",
    employeeDepartment: "Технологийн хэлтэс",
    submittedDate: "2026-01-12",
    candidateName: "Дорж Цэцэг",
    status: "SUBMITTED",
  },
  {
    id: "2",
    jobId: "1",
    employeeName: "Сүх Сарнай",
    employeeJobTitle: "Senior Engineer",
    employeeDepartment: "Технологийн хэлтэс",
    submittedDate: "2026-01-11",
    candidateName: "Ганбат Мөнх",
    status: "SUBMITTED",
  },
  {
    id: "3",
    jobId: "1",
    employeeName: "Алтан Өнөө",
    employeeJobTitle: "Lead Engineer",
    employeeDepartment: "Технологийн хэлтэс",
    submittedDate: "2026-01-10",
    candidateName: "Баяр Төмөр",
    status: "SUBMITTED",
  },
  {
    id: "4",
    jobId: "2",
    employeeName: "Энхтөр Бат",
    employeeJobTitle: "Product Manager",
    employeeDepartment: "Бүтээгдэхүүний хэлтэс",
    submittedDate: "2026-01-09",
    candidateName: "Саруул Номин",
    status: "SUBMITTED",
  },
  {
    id: "301",
    jobId: "3",
    employeeName: "Бат-Эрдэнэ Номин",
    employeeJobTitle: "UX Designer",
    employeeDepartment: "Дизайны алба",
    submittedDate: "2026-01-06",
    candidateName: "Энхжин Саруул",
    status: "APPROVED",
  },
  {
    id: "302",
    jobId: "3",
    employeeName: "Халиун Ариун",
    employeeJobTitle: "UI Designer",
    employeeDepartment: "Дизайны алба",
    submittedDate: "2026-01-05",
    candidateName: "Мөнх-Оргил Туяа",
    status: "REJECTED",
  },
  {
    id: "303",
    jobId: "3",
    employeeName: "Солонго Нарангэрэл",
    employeeJobTitle: "Product Designer",
    employeeDepartment: "Дизайны алба",
    submittedDate: "2026-01-04",
    candidateName: "Баярмаа Сондор",
    status: "REJECTED",
  },
  {
    id: "304",
    jobId: "4",
    employeeName: "Тэмүүлэн Ариун",
    employeeJobTitle: "Data Analyst",
    employeeDepartment: "Өгөгдлийн алба",
    submittedDate: "2026-01-04",
    candidateName: "Мөнхтөр Гэрэл",
    status: "APPROVED",
  },
  {
    id: "305",
    jobId: "4",
    employeeName: "Сод-Эрдэнэ Халиун",
    employeeJobTitle: "Senior Data Analyst",
    employeeDepartment: "Өгөгдлийн алба",
    submittedDate: "2026-01-03",
    candidateName: "Билгүүн Анужин",
    status: "REJECTED",
  },
  {
    id: "306",
    jobId: "4",
    employeeName: "Ганзориг Ням",
    employeeJobTitle: "BI Analyst",
    employeeDepartment: "Өгөгдлийн алба",
    submittedDate: "2026-01-02",
    candidateName: "Эрдэнэбаяр Хос",
    status: "REJECTED",
  },
];

// ================= MOCK REFERRAL DETAILS =================
export const mockReferralDetails: ReferralDetail[] = [
  {
    id: "1",
    employeeName: "Болд Бат",
    employeePhone: "9999-1111",
    employeeEmail: "bold.bat@company.mn",
    employeeDepartment: "Технологийн хэлтэс",
    employeeJobLevel: "Senior",
    employeeJobType: "Бүтэн цагийн",
    relationshipWithCandidate: "Их сургуулийн найз",
    referralReason: "Маш сайн програмист, backend талдаа туршлагатай",
    consentReceived: true,
    currentlyWorking: true,

    candidateName: "Дорж Цэцэг",
    candidatePhone: "9999-2222",
    candidateEmail: "dorj.tsetseg@email.com",
    candidateLinkedIn: "linkedin.com/in/dorj-tsetseg",
    candidateCurrentEmployment: "ABC Tech – Software Developer",
    candidateInterestedField: "Backend Development",
    cvUrl: "/cv/dorj-tsetseg.pdf",

    submittedDate: "2026-01-12",
    status: "SUBMITTED",
  },
  {
    id: "301",
    employeeName: "Бат-Эрдэнэ Номин",
    employeePhone: "9999-9001",
    employeeEmail: "nomiin.bat@company.mn",
    employeeDepartment: "Дизайны алба",
    employeeJobLevel: "Senior",
    employeeJobType: "Бүтэн цагийн",
    relationshipWithCandidate: "Хамт ажиллаж байсан",
    referralReason: "UX судалгаа, хэрэглэгчийн урсгал маш сайн",
    consentReceived: true,
    currentlyWorking: true,

    candidateName: "Энхжин Саруул",
    candidatePhone: "9999-9002",
    candidateEmail: "enkhjin.saruul@email.com",
    candidateLinkedIn: "linkedin.com/in/enkhjin-saruul",
    candidateCurrentEmployment: "Design Studio – UX Designer",
    candidateInterestedField: "UX Research",
    cvUrl: "/cv/enkhjin-saruul.pdf",

    submittedDate: "2026-01-06",
    status: "APPROVED",
  },
  {
    id: "304",
    employeeName: "Тэмүүлэн Ариун",
    employeePhone: "9999-9010",
    employeeEmail: "temuulen.ariun@company.mn",
    employeeDepartment: "Өгөгдлийн алба",
    employeeJobLevel: "Senior",
    employeeJobType: "Бүтэн цагийн",
    relationshipWithCandidate: "Хамт ажиллаж байсан",
    referralReason: "SQL, Python чадвар маш сайн",
    consentReceived: true,
    currentlyWorking: true,

    candidateName: "Мөнхтөр Гэрэл",
    candidatePhone: "9999-9011",
    candidateEmail: "munkhtur.gerel@email.com",
    candidateLinkedIn: "linkedin.com/in/munkhtur-gerel",
    candidateCurrentEmployment: "Analytics Co – Data Analyst",
    candidateInterestedField: "Data Analytics",
    cvUrl: "/cv/munkhtur-gerel.pdf",

    submittedDate: "2026-01-04",
    status: "APPROVED",
  },
];
