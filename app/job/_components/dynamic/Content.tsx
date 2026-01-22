import { JobDetail } from "@/lib/types";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  jobDetail: JobDetail;
};

export default function Content({ jobDetail }: Props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View>
            <Text style={styles.title}>{jobDetail.title}</Text>
            <Text style={styles.muted}>{jobDetail.department}</Text>
          </View>

          <View style={styles.grid}>
            <View>
              <Text style={styles.muted}>Ажлын төрөл:</Text>
              <Text style={styles.value}>{jobDetail.jobType}</Text>
            </View>
            <View>
              <Text style={styles.muted}>Түвшин:</Text>
              <Text style={styles.value}>{jobDetail.level}</Text>
            </View>
          </View>

          <View>
            <Text style={styles.muted}>Цалин:</Text>
            <Text style={styles.salary}>
              ₮{jobDetail.salaryMin.toLocaleString()} - ₮
              {jobDetail.salaryMax.toLocaleString()}
            </Text>
          </View>

          <View>
            <Text style={styles.muted}>Нийтэлсэн огноо:</Text>
            <Text style={styles.value}>{jobDetail.postedDate}</Text>
          </View>

          <Section title="Үндсэн үүрэг хариуцлага">
            {jobDetail.responsibilities}
          </Section>

          <Section title="Шаардлага">{jobDetail.requirements}</Section>

          <Section title="Шаардлагатай ур чадвар">{jobDetail.skills}</Section>

          <Section title="Урамшуулал & нэмэгдэл">{jobDetail.benefits}</Section>

          <Section title="Нэмэлт мэдээлэл">{jobDetail.additionalInfo}</Section>

          <Section title="Холбоо барих">{jobDetail.contactInfo}</Section>

          <Section title="Байршил">{jobDetail.location}</Section>
        </View>
      </View>
    </View>
  );
}

const Section = ({ title, children }: { title: string; children: string }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Text style={styles.text}>{children}</Text>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    padding: 16,
    paddingBottom: 96,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    gap: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  muted: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 4,
  },
  value: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 4,
  },
  grid: {
    flexDirection: "row",
    gap: 16,
  },
  salary: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2563eb",
    marginTop: 4,
  },
  section: {
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
  },
  sectionTitle: {
    fontWeight: "600",
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
  },
});
