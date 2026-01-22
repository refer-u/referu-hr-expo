import { mockJobData } from "@/lib/mock";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import Bottom from "../_components/edit/Bottom";
import EditForm from "../_components/edit/EditForm";

export default function EditJobPage() {
  const router = useRouter();
  const params = useLocalSearchParams<{ id?: string | string[] }>();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const [formData, setFormData] = useState({
    title: "",
    department: "",
    jobType: "",
    level: "",
    salaryMin: "",
    salaryMax: "",
    responsibilities: "",
    requirements: "",
    additionalInfo: "",
    skills: "",
    benefits: "",
    contactInfo: "",
    location: "",
  });

  const [hasReferrals, setHasReferrals] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const job = mockJobData[id];

    if (job) {
      setFormData({
        title: job.title,
        department: job.department,
        jobType: job.jobType,
        level: job.level,
        salaryMin: String(job.salaryMin),
        salaryMax: String(job.salaryMax),
        responsibilities: job.responsibilities,
        requirements: job.requirements,
        additionalInfo: job.additionalInfo,
        skills: job.skills,
        benefits: job.benefits,
        contactInfo: job.contactInfo,
        location: job.location,
      });
      setHasReferrals(job.hasReferrals);
    }

    setIsLoading(false);
  }, [id]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    Alert.alert("Амжилттай", "Зар амжилттай хадгалагдлаа 🎉", [
      {
        text: "OK",
        onPress: () => {
          router.replace(`/job/${id}`);
        },
      },
    ]);
  };

  const handleCancel = () => {
    router.back();
  };

  if (isLoading) {
    return (
      <View style={{ padding: 16 }}>
        <Text>Ачааллаж байна...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <EditForm
        formData={formData}
        hasReferrals={hasReferrals}
        onChange={handleInputChange}
      />

      <Bottom
        hasReferrals={hasReferrals}
        onCancel={handleCancel}
        onSave={handleSave}
      />
    </View>
  );
}
