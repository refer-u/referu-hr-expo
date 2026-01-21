// // lib/types.ts

// export type Status = "SUBMITTED" | "APPROVED" | "REJECTED" | "RESOLVED";

// export type Job = {
//   id: string;
//   title: string;
//   department: string;
//   postedDate: string;
//   salaryRange: string;
//   referralCount?: number;
//   status: Status;
// };

// export type Referral = {
//   id: string;
//   jobId: string;
//   employeeName: string;
//   employeeJobTitle: string;
//   employeeDepartment: string;
//   submittedDate: string;
//   candidateName: string;
//   status: Status;
// };

// export type ReferralDetail = {
//   id: string;

//   employeeName: string;
//   employeePhone: string;
//   employeeEmail: string;
//   employeeDepartment: string;
//   employeeJobLevel: string;
//   employeeJobType: string;
//   relationshipWithCandidate: string;
//   referralReason: string;
//   consentReceived: boolean;
//   currentlyWorking: boolean;

//   candidateName: string;
//   candidatePhone: string;
//   candidateEmail: string;
//   candidateLinkedIn?: string;
//   candidateCurrentEmployment: string;
//   candidateInterestedField?: string;
//   cvUrl?: string;

//   submittedDate: string;
//   status: Status;
// };

// // Status helpers
// export const statusColors: Record<Status, string> = {
//   SUBMITTED: "blue",
//   APPROVED: "green",
//   REJECTED: "red",
//   RESOLVED: "gray",
// };

// export const statusLabels: Record<Status, string> = {
//   SUBMITTED: "Шинэ",
//   APPROVED: "Зөвшөөрсөн",
//   REJECTED: "Татгалзсан",
//   RESOLVED: "Шийдэгдсэн",
// };

// // ================= MOCK JOBS =================
// export const mockJobs: Job[] = [
//   {
//     id: "1",
//     title: "Senior Software Engineer",
//     department: "Технологийн хэлтэс",
//     postedDate: "2026-01-01",
//     salaryRange: "₮3,000,000 - ₮5,000,000",
//     referralCount: 3,
//     status: "SUBMITTED",
//   },
//   {
//     id: "2",
//     title: "Product Manager",
//     department: "Бүтээгдэхүүний хэлтэс",
//     postedDate: "2026-01-02",
//     salaryRange: "₮3,500,000 - ₮5,500,000",
//     referralCount: 1,

//     status: "SUBMITTED",
//   },
//   {
//     id: "3",
//     title: "UX Designer",
//     department: "Дизайны алба",
//     postedDate: "2026-01-05",
//     salaryRange: "₮2,500,000 - ₮4,000,000",
//     status: "RESOLVED",
//   },
//   {
//     id: "4",
//     title: "Data Analyst",
//     department: "Өгөгдлийн алба",
//     postedDate: "2026-01-03",
//     salaryRange: "₮3,000,000 - ₮4,500,000",
//     status: "RESOLVED",
//   },
// ];

// // ================= MOCK REFERRALS =================
// export const mockReferrals: Referral[] = [
//   {
//     id: "1",
//     jobId: "1",
//     employeeName: "Болд Бат",
//     employeeJobTitle: "Software Engineer",
//     employeeDepartment: "Технологийн хэлтэс",
//     submittedDate: "2026-01-12",
//     candidateName: "Дорж Цэцэг",
//     status: "SUBMITTED",
//   },
//   {
//     id: "2",
//     jobId: "1",
//     employeeName: "Сүх Сарнай",
//     employeeJobTitle: "Senior Engineer",
//     employeeDepartment: "Технологийн хэлтэс",
//     submittedDate: "2026-01-11",
//     candidateName: "Ганбат Мөнх",
//     status: "SUBMITTED",
//   },
//   {
//     id: "3",
//     jobId: "1",
//     employeeName: "Алтан Өнөө",
//     employeeJobTitle: "Lead Engineer",
//     employeeDepartment: "Технологийн хэлтэс",
//     submittedDate: "2026-01-10",
//     candidateName: "Баяр Төмөр",
//     status: "SUBMITTED",
//   },
//   {
//     id: "4",
//     jobId: "2",
//     employeeName: "Энхтөр Бат",
//     employeeJobTitle: "Product Manager",
//     employeeDepartment: "Бүтээгдэхүүний хэлтэс",
//     submittedDate: "2026-01-09",
//     candidateName: "Саруул Номин",
//     status: "SUBMITTED",
//   },
//   {
//     id: "301",
//     jobId: "3",
//     employeeName: "Бат-Эрдэнэ Номин",
//     employeeJobTitle: "UX Designer",
//     employeeDepartment: "Дизайны алба",
//     submittedDate: "2026-01-06",
//     candidateName: "Энхжин Саруул",
//     status: "APPROVED",
//   },
//   {
//     id: "302",
//     jobId: "3",
//     employeeName: "Халиун Ариун",
//     employeeJobTitle: "UI Designer",
//     employeeDepartment: "Дизайны алба",
//     submittedDate: "2026-01-05",
//     candidateName: "Мөнх-Оргил Туяа",
//     status: "REJECTED",
//   },
//   {
//     id: "303",
//     jobId: "3",
//     employeeName: "Солонго Нарангэрэл",
//     employeeJobTitle: "Product Designer",
//     employeeDepartment: "Дизайны алба",
//     submittedDate: "2026-01-04",
//     candidateName: "Баярмаа Сондор",
//     status: "REJECTED",
//   },
//   {
//     id: "304",
//     jobId: "4",
//     employeeName: "Тэмүүлэн Ариун",
//     employeeJobTitle: "Data Analyst",
//     employeeDepartment: "Өгөгдлийн алба",
//     submittedDate: "2026-01-04",
//     candidateName: "Мөнхтөр Гэрэл",
//     status: "APPROVED",
//   },
//   {
//     id: "305",
//     jobId: "4",
//     employeeName: "Сод-Эрдэнэ Халиун",
//     employeeJobTitle: "Senior Data Analyst",
//     employeeDepartment: "Өгөгдлийн алба",
//     submittedDate: "2026-01-03",
//     candidateName: "Билгүүн Анужин",
//     status: "REJECTED",
//   },
//   {
//     id: "306",
//     jobId: "4",
//     employeeName: "Ганзориг Ням",
//     employeeJobTitle: "BI Analyst",
//     employeeDepartment: "Өгөгдлийн алба",
//     submittedDate: "2026-01-02",
//     candidateName: "Эрдэнэбаяр Хос",
//     status: "REJECTED",
//   },
// ];

// // ================= MOCK REFERRAL DETAILS =================
// export const mockReferralDetails: ReferralDetail[] = [
//   {
//     id: "1",
//     employeeName: "Болд Бат",
//     employeePhone: "9999-1111",
//     employeeEmail: "bold.bat@company.mn",
//     employeeDepartment: "Технологийн хэлтэс",
//     employeeJobLevel: "Senior",
//     employeeJobType: "Бүтэн цагийн",
//     relationshipWithCandidate: "Их сургуулийн найз",
//     referralReason: "Маш сайн програмист, backend талдаа туршлагатай",
//     consentReceived: true,
//     currentlyWorking: true,

//     candidateName: "Дорж Цэцэг",
//     candidatePhone: "9999-2222",
//     candidateEmail: "dorj.tsetseg@email.com",
//     candidateLinkedIn: "linkedin.com/in/dorj-tsetseg",
//     candidateCurrentEmployment: "ABC Tech – Software Developer",
//     candidateInterestedField: "Backend Development",
//     cvUrl: "/cv/dorj-tsetseg.pdf",

//     submittedDate: "2026-01-12",
//     status: "SUBMITTED",
//   },
//   {
//     id: "301",
//     employeeName: "Бат-Эрдэнэ Номин",
//     employeePhone: "9999-9001",
//     employeeEmail: "nomiin.bat@company.mn",
//     employeeDepartment: "Дизайны алба",
//     employeeJobLevel: "Senior",
//     employeeJobType: "Бүтэн цагийн",
//     relationshipWithCandidate: "Хамт ажиллаж байсан",
//     referralReason: "UX судалгаа, хэрэглэгчийн урсгал маш сайн",
//     consentReceived: true,
//     currentlyWorking: true,

//     candidateName: "Энхжин Саруул",
//     candidatePhone: "9999-9002",
//     candidateEmail: "enkhjin.saruul@email.com",
//     candidateLinkedIn: "linkedin.com/in/enkhjin-saruul",
//     candidateCurrentEmployment: "Design Studio – UX Designer",
//     candidateInterestedField: "UX Research",
//     cvUrl: "/cv/enkhjin-saruul.pdf",

//     submittedDate: "2026-01-06",
//     status: "APPROVED",
//   },
//   {
//     id: "304",
//     employeeName: "Тэмүүлэн Ариун",
//     employeePhone: "9999-9010",
//     employeeEmail: "temuulen.ariun@company.mn",
//     employeeDepartment: "Өгөгдлийн алба",
//     employeeJobLevel: "Senior",
//     employeeJobType: "Бүтэн цагийн",
//     relationshipWithCandidate: "Хамт ажиллаж байсан",
//     referralReason: "SQL, Python чадвар маш сайн",
//     consentReceived: true,
//     currentlyWorking: true,

//     candidateName: "Мөнхтөр Гэрэл",
//     candidatePhone: "9999-9011",
//     candidateEmail: "munkhtur.gerel@email.com",
//     candidateLinkedIn: "linkedin.com/in/munkhtur-gerel",
//     candidateCurrentEmployment: "Analytics Co – Data Analyst",
//     candidateInterestedField: "Data Analytics",
//     cvUrl: "/cv/munkhtur-gerel.pdf",

//     submittedDate: "2026-01-04",
//     status: "APPROVED",
//   },
// ];

// // =====================================================
// // ENUMS (ERD)
// // =====================================================

// export type JobTypeEnum =
//   | "FULL_TIME"
//   | "PART_TIME"
//   | "SHIFT_BASED"
//   | "SEASONAL"
//   | "CONTRACT"
//   | "TEMPORARY"
//   | "OTHER";

// export type JobLevelEnum =
//   | "EXECUTIVE"
//   | "UNIT_DIRECTOR"
//   | "UNIT_HEAD"
//   | "SENIOR_MANAGER"
//   | "MANAGER"
//   | "SENIOR_SPECIALIST"
//   | "SPECIALIST"
//   | "SENIOR_STAFF"
//   | "EMPLOYEE"
//   | "INTERN"
//   | "OTHER";

// export type RelationWithCandidateEnum =
//   | "FORMER_COLLEAGUE"
//   | "ALUMNI"
//   | "FRIEND"
//   | "FAMILY_RELATIVES"
//   | "OTHER";

// export type CandidateCurrentStatusEnum =
//   | "CURRENTLY_EMPLOYED"
//   | "STUDENT"
//   | "UNEMPLOYED"
//   | "OTHER";

// export type ReferralStatusEnum = "SUBMITTED" | "APPROVED" | "REJECTED";

// // =====================================================
// // TYPES (ERD)
// // =====================================================

// export type HRD = {
//   _id: string;
//   hrClerkId: string;
//   hrEmail: string;
//   postedJobs: string[];
//   createdAt: string;
//   updatedAt: string;
// };

// export type Employee = {
//   _id: string;
//   employeeClerkId: string;
//   employeeFirstName: string;
//   employeeLastName: string;
//   employeeTelNumber: string;
//   employeeEmail: string;
//   employeeDepartment: string;
//   employeeJobTitle: string;
//   employeeJobType: JobTypeEnum;
//   employeeJobLevel: JobLevelEnum;
//   createdAt: string;
//   updatedAt: string;
// };

// export type PostedJob = {
//   _id: string;
//   jobTitle: string;
//   jobDepartment: string;
//   jobType: JobTypeEnum;
//   jobLevel: JobLevelEnum;
//   salaryMin: number;
//   salaryMax: number;
//   keyDuties: string[];
//   requirements: string[];
//   additionalNotes?: string;
//   requiredSkills: string[];
//   benefits: string[];
//   contactInfo: string;
//   location: string;
//   createdAt: string;
//   updatedAt: string;
// };

// export type Referral = {
//   _id: string;
//   postedJobId: string;
//   referringEmployeeId: string;

//   relationWithCandidate: RelationWithCandidateEnum;
//   referralReason: string;

//   candidateFirstName: string;
//   candidateLastName: string;
//   candidateTelNumber: string;
//   candidateEmail: string;
//   candidateLinkedinUrl?: string;

//   candidateCurrentStatus: CandidateCurrentStatusEnum;
//   candidateFieldOfInterest?: string;
//   candidateResume?: string;

//   hasCandidateConsent: boolean;
//   isNotCurrentEmployee: boolean;

//   referralStatus: ReferralStatusEnum;
//   referralStatusUpdatedAt?: string;

//   bonusAmount?: number;
//   bonusApprovedAt?: string;

//   createdAt: string;
//   updatedAt: string;
// };

// // =====================================================
// // MOCK DATA
// // =====================================================

// // ---------------- HRD ----------------

// export const mockHRDs: HRD[] = [
//   {
//     _id: "hrd1",
//     hrClerkId: "clerk_hr_001",
//     hrEmail: "hr@company.mn",
//     postedJobs: ["job1", "job2", "job3", "job4"],
//     createdAt: "2026-01-01",
//     updatedAt: "2026-01-10",
//   },
// ];

// // ---------------- EMPLOYEES ----------------

// export const mockEmployees: Employee[] = [
//   {
//     _id: "emp1",
//     employeeClerkId: "clerk_emp_001",
//     employeeFirstName: "Болд",
//     employeeLastName: "Бат",
//     employeeTelNumber: "9999-1111",
//     employeeEmail: "bold.bat@company.mn",
//     employeeDepartment: "Технологийн хэлтэс",
//     employeeJobTitle: "Software Engineer",
//     employeeJobType: "FULL_TIME",
//     employeeJobLevel: "SENIOR_SPECIALIST",
//     createdAt: "2025-12-01",
//     updatedAt: "2026-01-01",
//   },
//   {
//     _id: "emp2",
//     employeeClerkId: "clerk_emp_002",
//     employeeFirstName: "Сүх",
//     employeeLastName: "Сарнай",
//     employeeTelNumber: "9999-2222",
//     employeeEmail: "sukh.sarnai@company.mn",
//     employeeDepartment: "Технологийн хэлтэс",
//     employeeJobTitle: "Senior Engineer",
//     employeeJobType: "FULL_TIME",
//     employeeJobLevel: "SENIOR_SPECIALIST",
//     createdAt: "2025-11-15",
//     updatedAt: "2026-01-01",
//   },
//   {
//     _id: "emp3",
//     employeeClerkId: "clerk_emp_003",
//     employeeFirstName: "Бат-Эрдэнэ",
//     employeeLastName: "Номин",
//     employeeTelNumber: "9999-9001",
//     employeeEmail: "nomiin.bat@company.mn",
//     employeeDepartment: "Дизайны алба",
//     employeeJobTitle: "UX Designer",
//     employeeJobType: "FULL_TIME",
//     employeeJobLevel: "SENIOR_SPECIALIST",
//     createdAt: "2025-10-01",
//     updatedAt: "2026-01-01",
//   },
//   {
//     _id: "emp4",
//     employeeClerkId: "clerk_emp_004",
//     employeeFirstName: "Тэмүүлэн",
//     employeeLastName: "Ариун",
//     employeeTelNumber: "9999-9010",
//     employeeEmail: "temuulen.ariun@company.mn",
//     employeeDepartment: "Өгөгдлийн алба",
//     employeeJobTitle: "Data Analyst",
//     employeeJobType: "FULL_TIME",
//     employeeJobLevel: "SENIOR_SPECIALIST",
//     createdAt: "2025-09-10",
//     updatedAt: "2026-01-01",
//   },
// ];

// // ---------------- POSTED JOBS ----------------

// export const mockPostedJobs: PostedJob[] = [
//   {
//     _id: "job1",
//     jobTitle: "Senior Software Engineer",
//     jobDepartment: "Технологийн хэлтэс",
//     jobType: "FULL_TIME",
//     jobLevel: "SENIOR_SPECIALIST",
//     salaryMin: 3000000,
//     salaryMax: 5000000,
//     keyDuties: ["Backend development", "Code review"],
//     requirements: ["5+ years experience"],
//     additionalNotes: "Remote possible",
//     requiredSkills: ["Node.js", "MongoDB"],
//     benefits: ["Health insurance"],
//     contactInfo: "hr@company.mn",
//     location: "Ulaanbaatar",
//     createdAt: "2026-01-01",
//     updatedAt: "2026-01-01",
//   },
//   {
//     _id: "job2",
//     jobTitle: "Product Manager",
//     jobDepartment: "Бүтээгдэхүүний хэлтэс",
//     jobType: "FULL_TIME",
//     jobLevel: "MANAGER",
//     salaryMin: 3500000,
//     salaryMax: 5500000,
//     keyDuties: ["Product planning"],
//     requirements: ["3+ years PM experience"],
//     requiredSkills: ["Agile", "Communication"],
//     benefits: ["Performance bonus"],
//     contactInfo: "hr@company.mn",
//     location: "Ulaanbaatar",
//     createdAt: "2026-01-02",
//     updatedAt: "2026-01-02",
//   },
//   {
//     _id: "job3",
//     jobTitle: "UX Designer",
//     jobDepartment: "Дизайны алба",
//     jobType: "FULL_TIME",
//     jobLevel: "SPECIALIST",
//     salaryMin: 2500000,
//     salaryMax: 4000000,
//     keyDuties: ["UX research", "Wireframing"],
//     requirements: ["Portfolio required"],
//     requiredSkills: ["Figma", "UX Research"],
//     benefits: ["Flexible hours"],
//     contactInfo: "hr@company.mn",
//     location: "Ulaanbaatar",
//     createdAt: "2026-01-05",
//     updatedAt: "2026-01-05",
//   },
//   {
//     _id: "job4",
//     jobTitle: "Data Analyst",
//     jobDepartment: "Өгөгдлийн алба",
//     jobType: "FULL_TIME",
//     jobLevel: "SPECIALIST",
//     salaryMin: 3000000,
//     salaryMax: 4500000,
//     keyDuties: ["Data analysis", "Reporting"],
//     requirements: ["SQL knowledge"],
//     requiredSkills: ["SQL", "Python"],
//     benefits: ["Health insurance"],
//     contactInfo: "hr@company.mn",
//     location: "Ulaanbaatar",
//     createdAt: "2026-01-03",
//     updatedAt: "2026-01-03",
//   },
// ];

// // ---------------- REFERRALS ----------------

// export const mockReferrals: Referral[] = [
//   {
//     _id: "ref1",
//     postedJobId: "job1",
//     referringEmployeeId: "emp1",
//     relationWithCandidate: "FRIEND",
//     referralReason: "Backend талдаа маш сайн",

//     candidateFirstName: "Дорж",
//     candidateLastName: "Цэцэг",
//     candidateTelNumber: "9999-2222",
//     candidateEmail: "dorj.tsetseg@email.com",
//     candidateLinkedinUrl: "linkedin.com/in/dorj-tsetseg",

//     candidateCurrentStatus: "CURRENTLY_EMPLOYED",
//     candidateFieldOfInterest: "Backend Development",
//     candidateResume: "/cv/dorj-tsetseg.pdf",

//     hasCandidateConsent: true,
//     isNotCurrentEmployee: true,

//     referralStatus: "SUBMITTED",
//     referralStatusUpdatedAt: "2026-01-12",

//     createdAt: "2026-01-12",
//     updatedAt: "2026-01-12",
//   },
//   {
//     _id: "ref2",
//     postedJobId: "job3",
//     referringEmployeeId: "emp3",
//     relationWithCandidate: "FORMER_COLLEAGUE",
//     referralReason: "UX судалгаа, урсгалын ойлголт маш сайн",

//     candidateFirstName: "Энхжин",
//     candidateLastName: "Саруул",
//     candidateTelNumber: "9999-9002",
//     candidateEmail: "enkhjin.saruul@email.com",
//     candidateLinkedinUrl: "linkedin.com/in/enkhjin-saruul",

//     candidateCurrentStatus: "CURRENTLY_EMPLOYED",
//     candidateFieldOfInterest: "UX Research",
//     candidateResume: "/cv/enkhjin-saruul.pdf",

//     hasCandidateConsent: true,
//     isNotCurrentEmployee: true,

//     referralStatus: "APPROVED",
//     referralStatusUpdatedAt: "2026-01-06",

//     bonusAmount: 500000,
//     bonusApprovedAt: "2026-01-10",

//     createdAt: "2026-01-06",
//     updatedAt: "2026-01-10",
//   },
// ];

// =====================================================
// ENUMS (ERD)
// =====================================================

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

// ---------------- POSTED JOBS ----------------

export const mockPostedJobs: PostedJob[] = [
  {
    _id: "job1",
    jobTitle: "Senior Software Engineer",
    jobDepartment: "Технологийн хэлтэс",
    jobType: "FULL_TIME",
    jobLevel: "SENIOR_SPECIALIST",
    salaryMin: 3000000,
    salaryMax: 5000000,
    keyDuties: ["Backend development", "Code review"],
    requirements: ["5+ years experience"],
    additionalNotes: "Remote possible",
    requiredSkills: ["Node.js", "MongoDB"],
    benefits: ["Health insurance"],
    contactInfo: "hr@company.mn",
    location: "Ulaanbaatar",
    createdAt: "2026-01-01",
    updatedAt: "2026-01-01",
  },
  {
    _id: "job2",
    jobTitle: "Product Manager",
    jobDepartment: "Бүтээгдэхүүний хэлтэс",
    jobType: "FULL_TIME",
    jobLevel: "MANAGER",
    salaryMin: 3500000,
    salaryMax: 5500000,
    keyDuties: ["Product planning"],
    requirements: ["3+ years PM experience"],
    requiredSkills: ["Agile", "Communication"],
    benefits: ["Performance bonus"],
    contactInfo: "hr@company.mn",
    location: "Ulaanbaatar",
    createdAt: "2026-01-02",
    updatedAt: "2026-01-02",
  },
  {
    _id: "job3",
    jobTitle: "UX Designer",
    jobDepartment: "Дизайны алба",
    jobType: "FULL_TIME",
    jobLevel: "SPECIALIST",
    salaryMin: 2500000,
    salaryMax: 4000000,
    keyDuties: ["UX research", "Wireframing"],
    requirements: ["Portfolio required"],
    requiredSkills: ["Figma", "UX Research"],
    benefits: ["Flexible hours"],
    contactInfo: "hr@company.mn",
    location: "Ulaanbaatar",
    createdAt: "2026-01-05",
    updatedAt: "2026-01-05",
  },
  {
    _id: "job4",
    jobTitle: "Data Analyst",
    jobDepartment: "Өгөгдлийн алба",
    jobType: "FULL_TIME",
    jobLevel: "SPECIALIST",
    salaryMin: 3000000,
    salaryMax: 4500000,
    keyDuties: ["Data analysis", "Reporting"],
    requirements: ["SQL knowledge"],
    requiredSkills: ["SQL", "Python"],
    benefits: ["Health insurance"],
    contactInfo: "hr@company.mn",
    location: "Ulaanbaatar",
    createdAt: "2026-01-03",
    updatedAt: "2026-01-03",
  },
];

// ---------------- REFERRALS ----------------

export const mockReferrals: Referral[] = [
  {
    _id: "ref1",
    postedJobId: "job1",
    referringEmployeeId: "emp1",
    relationWithCandidate: "FRIEND",
    referralReason: "Backend талдаа маш сайн",

    candidateFirstName: "Дорж",
    candidateLastName: "Цэцэг",
    candidateTelNumber: "9999-3333",
    candidateEmail: "dorj.tsetseg@email.com",
    candidateLinkedinUrl: "linkedin.com/in/dorj-tsetseg",

    candidateCurrentStatus: "CURRENTLY_EMPLOYED",
    candidateFieldOfInterest: "Backend Development",
    candidateResume: "/cv/dorj.pdf",

    hasCandidateConsent: true,
    isNotCurrentEmployee: true,

    referralStatus: "SUBMITTED",
    referralStatusUpdatedAt: "2026-01-12",

    createdAt: "2026-01-12",
    updatedAt: "2026-01-12",
  },
  {
    _id: "ref2",
    postedJobId: "job2",
    referringEmployeeId: "emp2",
    relationWithCandidate: "FRIEND",
    referralReason: "Backend талдаа маш сайн",

    candidateFirstName: "bla",
    candidateLastName: "bla",
    candidateTelNumber: "9999-3333",
    candidateEmail: "dorj.tsetseg@email.com",
    candidateLinkedinUrl: "linkedin.com/in/dorj-tsetseg",

    candidateCurrentStatus: "CURRENTLY_EMPLOYED",
    candidateFieldOfInterest: "Backend Development",
    candidateResume: "/cv/dorj.pdf",

    hasCandidateConsent: true,
    isNotCurrentEmployee: true,

    referralStatus: "SUBMITTED",
    referralStatusUpdatedAt: "2026-01-12",

    createdAt: "2026-01-12",
    updatedAt: "2026-01-12",
  },
  {
    _id: "ref3",
    postedJobId: "job3",
    referringEmployeeId: "emp3",
    relationWithCandidate: "FORMER_COLLEAGUE",
    referralReason: "UX судалгаа маш сайн",

    candidateFirstName: "Энхжин",
    candidateLastName: "Саруул",
    candidateTelNumber: "9999-9002",
    candidateEmail: "enkhjin@email.com",
    candidateLinkedinUrl: "linkedin.com/in/enkhjin-saruul",

    candidateCurrentStatus: "CURRENTLY_EMPLOYED",
    candidateFieldOfInterest: "UX Research",
    candidateResume: "/cv/enkhjin.pdf",

    hasCandidateConsent: true,
    isNotCurrentEmployee: true,

    referralStatus: "APPROVED",
    referralStatusUpdatedAt: "2026-01-06",

    bonusAmount: 500000,
    bonusApprovedAt: "2026-01-10",

    createdAt: "2026-01-06",
    updatedAt: "2026-01-10",
  },
  {
    _id: "ref3",
    postedJobId: "job4",
    referringEmployeeId: "emp4",
    relationWithCandidate: "ALUMNI",
    referralReason: "SQL, Python чадвар сайн",

    candidateFirstName: "Мөнхтөр",
    candidateLastName: "Гэрэл",
    candidateTelNumber: "9999-9011",
    candidateEmail: "munkhtur@email.com",

    candidateCurrentStatus: "UNEMPLOYED",
    candidateFieldOfInterest: "Data Analytics",

    hasCandidateConsent: true,
    isNotCurrentEmployee: true,

    referralStatus: "REJECTED",
    referralStatusUpdatedAt: "2026-01-08",

    createdAt: "2026-01-04",
    updatedAt: "2026-01-08",
  },
];
