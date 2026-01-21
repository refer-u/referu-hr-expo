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

export type ReferralStatusEnum = "SUBMITTED" | "APPROVED" | "REJECTED";

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
  APPROVED: "Зөвшөөрсөн",
  REJECTED: "Татгалзсан",
};

export const ReferralStatusColors: Record<ReferralStatusEnum, string> = {
  SUBMITTED: "#3B82F6", // Blue
  APPROVED: "#10B981", // Green
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

export const mockPostedJobs: PostedJob[] = [
  // --- SUBMITTED (OPEN) JOBS ---
  {
    _id: "job_sub_1",
    jobTitle: "Senior Software Engineer",
    jobDepartment: "Технологийн хэлтэс",
    jobType: "FULL_TIME",
    jobLevel: "SENIOR_SPECIALIST",
    salaryMin: 4500000,
    salaryMax: 6000000,
    keyDuties: [
      "Backend architecture",
      "Mentoring junior devs",
      "API optimization",
    ],
    requirements: [
      "6+ years of Node.js experience",
      "Strong system design skills",
    ],
    requiredSkills: ["Node.js", "PostgreSQL", "Redis"],
    benefits: ["Flexible hours", "Private health insurance", "Learning budget"],
    contactInfo: "hr_tech@company.mn",
    location: "Ulaanbaatar (Hybrid)",
    createdAt: "2026-01-10",
    updatedAt: "2026-01-10",
  },
  {
    _id: "job_sub_2",
    jobTitle: "Growth Marketing Manager",
    jobDepartment: "Маркетингийн хэлтэс",
    jobType: "FULL_TIME",
    jobLevel: "MANAGER",
    salaryMin: 3000000,
    salaryMax: 4500000,
    keyDuties: [
      "User acquisition strategies",
      "Funnel analysis",
      "Ad campaign management",
    ],
    requirements: ["3+ years in digital marketing", "Data-driven mindset"],
    requiredSkills: ["Google Ads", "Meta Business Suite", "SQL"],
    benefits: ["Performance-based bonus", "Company laptop"],
    contactInfo: "hr_marketing@company.mn",
    location: "Ulaanbaatar",
    createdAt: "2026-01-12",
    updatedAt: "2026-01-12",
  },
  // --- RESOLVED (COMPLETED) JOBS ---
  {
    _id: "job_res_1",
    jobTitle: "UI/UX Designer",
    jobDepartment: "Дизайны алба",
    jobType: "FULL_TIME",
    jobLevel: "SPECIALIST",
    salaryMin: 2500000,
    salaryMax: 3800000,
    keyDuties: ["Creating hi-fi prototypes", "Conducting user interviews"],
    requirements: ["Strong Figma portfolio", "Understanding of design systems"],
    requiredSkills: ["Figma", "Adobe CC", "Prototyping"],
    benefits: ["Creative environment", "Gym membership"],
    contactInfo: "hr_design@company.mn",
    location: "Ulaanbaatar",
    createdAt: "2025-12-01",
    updatedAt: "2026-01-05", // Resolved date
  },
  {
    _id: "job_res_2",
    jobTitle: "Data Analyst",
    jobDepartment: "Өгөгдлийн алба",
    jobType: "CONTRACT",
    jobLevel: "SPECIALIST",
    salaryMin: 3000000,
    salaryMax: 4000000,
    keyDuties: ["Building BI dashboards", "Cleaning raw data"],
    requirements: ["Proficiency in Python or R", "Excel mastery"],
    requiredSkills: ["Tableau", "Python", "BigQuery"],
    benefits: ["Remote work option"],
    contactInfo: "hr_data@company.mn",
    location: "Remote",
    createdAt: "2025-11-20",
    updatedAt: "2025-12-25", // Resolved date
  },
];

// ---------------- REFERRALS ----------------
// ---------------- REFERRALS ----------------
export const mockReferrals: Referral[] = [
  // --- REFERRALS FOR SUBMITTED JOB 1 (Senior SWE) ---
  {
    _id: "ref_101",
    postedJobId: "job_sub_1",
    referringEmployeeId: "emp1",
    relationWithCandidate: "FORMER_COLLEAGUE",
    referralReason: "Worked with him for 3 years. Exceptional troubleshooter.",
    candidateFirstName: "Золбоо",
    candidateLastName: "Төмөр",
    candidateTelNumber: "8888-1010",
    candidateEmail: "zolboo.t@gmail.com",
    candidateCurrentStatus: "CURRENTLY_EMPLOYED",
    candidateFieldOfInterest: "Backend Engineering",
    candidateResume: "/resumes/zolboo-t-backend.pdf",
    candidateLinkedinUrl: "https://www.linkedin.com/in/zolboo-tech/", // Added
    hasCandidateConsent: true,
    isNotCurrentEmployee: true,
    referralStatus: "SUBMITTED",
    createdAt: "2026-01-15",
    updatedAt: "2026-01-15",
  },
  {
    _id: "ref_102",
    postedJobId: "job_sub_1",
    referringEmployeeId: "emp2",
    relationWithCandidate: "FRIEND",
    referralReason:
      "Strong knowledge of distributed systems and microservices.",
    candidateFirstName: "Ану",
    candidateLastName: "Эрдэнэ",
    candidateTelNumber: "8888-2020",
    candidateEmail: "anu.erdene@outlook.com",
    candidateCurrentStatus: "CURRENTLY_EMPLOYED",
    candidateFieldOfInterest: "Software Architecture",
    candidateResume: "/resumes/anu-e-architecture.pdf",
    candidateLinkedinUrl: "https://www.linkedin.com/in/anu-erdene-arch/", // Added
    hasCandidateConsent: true,
    isNotCurrentEmployee: true,
    referralStatus: "SUBMITTED",
    createdAt: "2026-01-16",
    updatedAt: "2026-01-16",
  },

  // --- REFERRALS FOR SUBMITTED JOB 2 (Growth Marketing) ---
  {
    _id: "ref_201",
    postedJobId: "job_sub_2",
    referringEmployeeId: "emp4",
    relationWithCandidate: "ALUMNI",
    referralReason:
      "Top of our class in Marketing, has 4 years of agency experience.",
    candidateFirstName: "Чингүүн",
    candidateLastName: "Болд",
    candidateTelNumber: "8888-3030",
    candidateEmail: "chingun.b@gmail.com",
    candidateCurrentStatus: "UNEMPLOYED",
    candidateFieldOfInterest: "Performance Marketing",
    candidateResume: "/resumes/chingun-b-marketing.pdf",
    candidateLinkedinUrl: "https://www.linkedin.com/in/chingun-marketing/", // Added
    hasCandidateConsent: true,
    isNotCurrentEmployee: true,
    referralStatus: "SUBMITTED",
    createdAt: "2026-01-17",
    updatedAt: "2026-01-17",
  },
  {
    _id: "ref_202",
    postedJobId: "job_sub_2",
    referringEmployeeId: "emp1",
    relationWithCandidate: "FRIEND",
    referralReason: "Highly creative person with great analytical skills.",
    candidateFirstName: "Мишээл",
    candidateLastName: "Ганзориг",
    candidateTelNumber: "8888-4040",
    candidateEmail: "misheel.g@gmail.com",
    candidateCurrentStatus: "CURRENTLY_EMPLOYED",
    candidateFieldOfInterest: "Digital Strategy",
    candidateResume: "/resumes/misheel-g-cv.pdf",
    candidateLinkedinUrl: "https://www.linkedin.com/in/misheel-ganzo/", // Added
    hasCandidateConsent: true,
    isNotCurrentEmployee: true,
    referralStatus: "SUBMITTED",
    createdAt: "2026-01-18",
    updatedAt: "2026-01-18",
  },

  // --- REFERRALS FOR RESOLVED JOB 1 (UI/UX) ---
  {
    _id: "ref_301",
    postedJobId: "job_res_1",
    referringEmployeeId: "emp3",
    relationWithCandidate: "FORMER_COLLEAGUE",
    referralReason: "Her portfolio matches our design system perfectly.",
    candidateFirstName: "Намуун",
    candidateLastName: "Баяр",
    candidateTelNumber: "8888-5050",
    candidateEmail: "namuun.b@yahoo.com",
    candidateCurrentStatus: "CURRENTLY_EMPLOYED",
    candidateResume: "/cv/namuun_ux.pdf",
    candidateLinkedinUrl: "https://www.linkedin.com/in/namuun-uiux/", // Added
    hasCandidateConsent: true,
    isNotCurrentEmployee: true,
    referralStatus: "APPROVED",
    referralStatusUpdatedAt: "2026-01-05",
    bonusAmount: 400000,
    bonusApprovedAt: "2026-01-06",
    createdAt: "2025-12-10",
    updatedAt: "2026-01-06",
  },
  {
    _id: "ref_302",
    postedJobId: "job_res_1",
    referringEmployeeId: "emp1",
    relationWithCandidate: "OTHER",
    referralReason: "Junior designer looking for a career change.",
    candidateFirstName: "Тулга",
    candidateLastName: "Даваа",
    candidateTelNumber: "8888-6060",
    candidateEmail: "tulga.d@gmail.com",
    candidateCurrentStatus: "STUDENT",
    candidateResume: "/resumes/tulga-d-student.pdf",
    candidateLinkedinUrl: "https://www.linkedin.com/in/tulga-d-designer/", // Added
    hasCandidateConsent: true,
    isNotCurrentEmployee: true,
    referralStatus: "REJECTED",
    referralStatusUpdatedAt: "2025-12-20",
    createdAt: "2025-12-12",
    updatedAt: "2025-12-20",
  },

  // --- REFERRALS FOR RESOLVED JOB 2 (Data Analyst) ---
  {
    _id: "ref_401",
    postedJobId: "job_res_2",
    referringEmployeeId: "emp4",
    relationWithCandidate: "ALUMNI",
    referralReason: "Expert in SQL and Python. Very detail oriented.",
    candidateFirstName: "Хангай",
    candidateLastName: "Энх",
    candidateTelNumber: "8888-7070",
    candidateEmail: "khangai.e@data.mn",
    candidateCurrentStatus: "CURRENTLY_EMPLOYED",
    candidateResume: "/cv/khangai_data.pdf",
    candidateLinkedinUrl: "https://www.linkedin.com/in/khangai-enkh-data/", // Added
    hasCandidateConsent: true,
    isNotCurrentEmployee: true,
    referralStatus: "APPROVED",
    referralStatusUpdatedAt: "2025-12-25",
    bonusAmount: 350000,
    bonusApprovedAt: "2025-12-26",
    createdAt: "2025-11-25",
    updatedAt: "2025-12-26",
  },
  {
    _id: "ref_402",
    postedJobId: "job_res_2",
    referringEmployeeId: "emp3",
    relationWithCandidate: "FRIEND",
    referralReason: "Knows basic Excel, wants to learn more data analysis.",
    candidateFirstName: "Сарнай",
    candidateLastName: "Мөнх",
    candidateTelNumber: "8888-8080",
    candidateEmail: "sarnai.m@gmail.com",
    candidateCurrentStatus: "OTHER",
    candidateResume: "/resumes/sarnai-m-data.pdf",
    candidateLinkedinUrl: "https://www.linkedin.com/in/sarnai-analyst/", // Added
    hasCandidateConsent: true,
    isNotCurrentEmployee: true,
    referralStatus: "REJECTED",
    referralStatusUpdatedAt: "2025-12-10",
    createdAt: "2025-11-26",
    updatedAt: "2025-12-10",
  },
  {
    _id: "ref_403",
    postedJobId: "job_res_2",
    referringEmployeeId: "emp2",
    relationWithCandidate: "FORMER_COLLEAGUE",
    referralReason:
      "Experienced analyst but requires a higher salary than offered.",
    candidateFirstName: "Билгүүн",
    candidateLastName: "Зориг",
    candidateTelNumber: "8888-9090",
    candidateEmail: "bilguun.z@gmail.com",
    candidateCurrentStatus: "CURRENTLY_EMPLOYED",
    candidateResume: "/resumes/bilguun-z-senior.pdf",
    candidateLinkedinUrl: "https://www.linkedin.com/in/bilguun-zorig-data/", // Added
    hasCandidateConsent: true,
    isNotCurrentEmployee: true,
    referralStatus: "REJECTED",
    referralStatusUpdatedAt: "2025-12-15",
    createdAt: "2025-11-28",
    updatedAt: "2025-12-15",
  },
];
