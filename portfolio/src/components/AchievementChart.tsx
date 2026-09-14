import { useMemo } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useLanguage } from '../hooks/useLanguage';
import type { AnnualBreakdown } from '../types';

interface AchievementChartProps {
  data: AnnualBreakdown[];
}

const CATEGORY_COLOR = {
  projects: '#67E8F9',
  internships: '#38BDF8',
  certificates: '#22D3EE',
  activities: '#0891B2',
};

export function AchievementChart({ data }: AchievementChartProps) {
  const { lang } = useLanguage();

  const labels = useMemo(
    () => ({
      projects: lang === 'en' ? 'Projects' : 'مشروعات',
      internships: lang === 'en' ? 'Internships' : 'تدريبات',
      certificates: lang === 'en' ? 'Certificates' : 'شهادات',
      activities: lang === 'en' ? 'Activities' : 'أنشطة',
    }),
    [lang]
  );

  const chartData = useMemo(
    () =>
      data.map((d) => ({
        year: String(d.year),
        [labels.projects]: d.projects,
        [labels.internships]: d.internships,
        [labels.certificates]: d.certificates,
        [labels.activities]: d.activities,
      })),
    [data, labels]
  );

  return (
    <div className="rounded-2xl border border-white/10 bg-card p-4 sm:p-6">
      <div
        role="img"
        aria-label={
          lang === 'en'
            ? `Bar chart of yearly portfolio activity. ${data
                .map((d) => `${d.year}: ${d.total} total activities`)
                .join('. ')}.`
            : `مخطط شريطي للنشاط السنوي للملف المهني. ${data
                .map((d) => `${d.year}: ${d.total} نشاطاً إجمالاً`)
                .join('. ')}.`
        }
        className="h-[320px] w-full"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 10, right: 8, left: -20, bottom: 0 }} barGap={4}>
            <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
            <XAxis dataKey="year" stroke="#737373" tickLine={false} axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} />
            <YAxis
              stroke="#737373"
              tickLine={false}
              axisLine={false}
              allowDecimals={false}
              width={28}
            />
            <Tooltip
              contentStyle={{
                background: '#101010',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 12,
                color: '#F5F5F5',
              }}
              cursor={{ fill: 'rgba(103,232,249,0.05)' }}
            />
            <Legend
              wrapperStyle={{ fontSize: 12, color: '#A3A3A3', paddingTop: 12 }}
              iconType="circle"
              iconSize={8}
            />
            <Bar dataKey={labels.projects} stackId="a" fill={CATEGORY_COLOR.projects} radius={[0, 0, 0, 0]} />
            <Bar dataKey={labels.internships} stackId="a" fill={CATEGORY_COLOR.internships} />
            <Bar dataKey={labels.certificates} stackId="a" fill={CATEGORY_COLOR.certificates} />
            <Bar
              dataKey={labels.activities}
              stackId="a"
              fill={CATEGORY_COLOR.activities}
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
