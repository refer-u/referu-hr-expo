export type JobTypeEnum =
  | "FULL_TIME"
  | "PART_TIME"
  | "SHIFT_BASED"
  | "SEASONAL"
  | "CONTRACT"
  | "TEMPORARY"
  | "OTHER";

export type JobLevelEnum =
  | "EXECUTIVE"
  | "UNIT_DIRECTOR"
  | "UNIT_HEAD"
  | "SENIOR_MANAGER"
  | "MANAGER"
  | "SENIOR_SPECIALIST"
  | "SPECIALIST"
  | "SENIOR_STAFF"
  | "EMPLOYEE"
  | "INTERN"
  | "OTHER";

export type RelationWithCandidateEnum =
  | "FORMER_COLLEAGUE"
  | "ALUMNI"
  | "FRIEND"
  | "FAMILY_RELATIVES"
  | "OTHER";

export type CandidateCurrentStatusEnum =
  | "CURRENTLY_EMPLOYED"
  | "STUDENT"
  | "UNEMPLOYED"
  | "OTHER";

export type ReferralStatusEnum =
  | "SUBMITTED"
  | "BONUS100"
  | "BONUS200"
  | "REJECTED";

// =====================================================
// TYPES (ERD)
// =====================================================

export type HRD = {
  _id: string;
  hrClerkId: string;
  hrEmail: string;
  postedJobs: string[];
  createdAt: string;
  updatedAt: string;
};

export type Employee = {
  _id: string;
  employeeClerkId: string;
  employeeFirstName: string;
  employeeLastName: string;
  employeeTelNumber: string;
  employeeEmail: string;
  employeeDepartment: string;
  employeeJobTitle: string;
  employeeJobType: JobTypeEnum;
  employeeJobLevel: JobLevelEnum;
  createdAt: string;
  updatedAt: string;
};

export type PostedJob = {
  _id: string;
  jobTitle: string;
  jobDepartment: string;
  jobType: JobTypeEnum;
  jobLevel: JobLevelEnum;
  salaryMin: number;
  salaryMax: number;
  keyDuties: string[];
  requirements: string[];
  additionalNotes?: string;
  requiredSkills: string[];
  benefits: string[];
  contactInfo: string;
  location: string;
  createdAt: string;
  updatedAt: string;
};

export type Referral = {
  _id: string;
  postedJobId: string;
  referringEmployeeId: string;

  relationWithCandidate: RelationWithCandidateEnum;
  referralReason: string;

  candidateFirstName: string;
  candidateLastName: string;
  candidateTelNumber: string;
  candidateEmail: string;
  candidateLinkedinUrl?: string;

  candidateCurrentStatus: CandidateCurrentStatusEnum;
  candidateFieldOfInterest?: string;
  candidateResume?: string;

  hasCandidateConsent: boolean;
  isNotCurrentEmployee: boolean;

  referralStatus: ReferralStatusEnum;
  referralStatusUpdatedAt?: string;

  bonusAmount?: number;
  bonusApprovedAt?: string;

  createdAt: string;
  updatedAt: string;
};

export const JobTypeLabels: Record<JobTypeEnum, string> = {
  FULL_TIME: "Үндсэн ажилтан",
  PART_TIME: "Цагийн ажилтан",
  SHIFT_BASED: "Ээлжийн ажил",
  SEASONAL: "Улирлын чанартай",
  CONTRACT: "Гэрээт",
  TEMPORARY: "Түр ажилтан",
  OTHER: "Бусад",
};

export const JobLevelLabels: Record<JobLevelEnum, string> = {
  EXECUTIVE: "Удирдах албан тушаал",
  UNIT_DIRECTOR: "Захирал",
  UNIT_HEAD: "Албаны дарга",
  SENIOR_MANAGER: "Ахлах менежер",
  MANAGER: "Менежер",
  SENIOR_SPECIALIST: "Ахлах мэргэжилтэн",
  SPECIALIST: "Мэргэжилтэн",
  SENIOR_STAFF: "Ахлах ажилтан",
  EMPLOYEE: "Ажилтан",
  INTERN: "Дадлагажигч",
  OTHER: "Бусад",
};

export const RelationLabels: Record<RelationWithCandidateEnum, string> = {
  FORMER_COLLEAGUE: "Хамт ажиллаж байсан",
  ALUMNI: "Нэг сургуулийн төгсөгч",
  FRIEND: "Найз нөхөд",
  FAMILY_RELATIVES: "Гэр бүл, садан төрөл",
  OTHER: "Бусад",
};

export const CandidateStatusLabels: Record<CandidateCurrentStatusEnum, string> =
  {
    CURRENTLY_EMPLOYED: "Ажил эрхэлж байгаа",
    STUDENT: "Оюутан",
    UNEMPLOYED: "Ажилгүй",
    OTHER: "Бусад",
  };

export const ReferralStatusLabels: Record<ReferralStatusEnum, string> = {
  SUBMITTED: "Шинэ",
  BONUS100: "Туршилтын ажилтан",
  BONUS200: "Бүтэн цагийн ажилтан",
  REJECTED: "Татгалзсан",
};

export const ReferralStatusColors: Record<ReferralStatusEnum, string> = {
  SUBMITTED: "#3B82F6", // Blue
  BONUS100: "#10B981", // Green
  BONUS200: "#10B981", // Green
  REJECTED: "#EF4444", // Red
};

// =====================================================
// MOCK DATA
// =====================================================

// ---------------- HRD ----------------

export const mockHRDs: HRD[] = [
  {
    _id: "hrd1",
    hrClerkId: "clerk_hr_001",
    hrEmail: "hr@company.mn",
    postedJobs: ["job1", "job2", "job3", "job4"],
    createdAt: "2026-01-01",
    updatedAt: "2026-01-10",
  },
];

// ---------------- EMPLOYEES ----------------

export const mockEmployees: Employee[] = [
  {
    _id: "emp1",
    employeeClerkId: "clerk_emp_001",
    employeeFirstName: "Болд",
    employeeLastName: "Бат",
    employeeTelNumber: "9999-1111",
    employeeEmail: "bold.bat@company.mn",
    employeeDepartment: "Технологийн хэлтэс",
    employeeJobTitle: "Software Engineer",
    employeeJobType: "FULL_TIME",
    employeeJobLevel: "SENIOR_SPECIALIST",
    createdAt: "2025-12-01",
    updatedAt: "2026-01-01",
  },
  {
    _id: "emp2",
    employeeClerkId: "clerk_emp_002",
    employeeFirstName: "Сүх",
    employeeLastName: "Сарнай",
    employeeTelNumber: "9999-2222",
    employeeEmail: "sukh.sarnai@company.mn",
    employeeDepartment: "Технологийн хэлтэс",
    employeeJobTitle: "Senior Engineer",
    employeeJobType: "FULL_TIME",
    employeeJobLevel: "SENIOR_SPECIALIST",
    createdAt: "2025-11-15",
    updatedAt: "2026-01-01",
  },
  {
    _id: "emp3",
    employeeClerkId: "clerk_emp_003",
    employeeFirstName: "Бат-Эрдэнэ",
    employeeLastName: "Номин",
    employeeTelNumber: "9999-9001",
    employeeEmail: "nomiin.bat@company.mn",
    employeeDepartment: "Дизайны алба",
    employeeJobTitle: "UX Designer",
    employeeJobType: "FULL_TIME",
    employeeJobLevel: "SPECIALIST",
    createdAt: "2025-10-01",
    updatedAt: "2026-01-01",
  },
  {
    _id: "emp4",
    employeeClerkId: "clerk_emp_004",
    employeeFirstName: "Тэмүүлэн",
    employeeLastName: "Ариун",
    employeeTelNumber: "9999-9010",
    employeeEmail: "temuulen.ariun@company.mn",
    employeeDepartment: "Өгөгдлийн алба",
    employeeJobTitle: "Data Analyst",
    employeeJobType: "FULL_TIME",
    employeeJobLevel: "SPECIALIST",
    createdAt: "2025-09-10",
    updatedAt: "2026-01-01",
  },
];
