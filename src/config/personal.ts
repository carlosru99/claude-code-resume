/**
 * Centralized personal configuration.
 * Career data, fun command content, and display settings.
 */

import { resume } from '@/lib/resume-data';

const careerStartYear = Math.min(
  ...resume.work.map((w) => new Date(w.startDate).getFullYear()),
);

export const personalConfig = {
  careerStartYear,
  timezone: 'Europe/Madrid',
  status: 'Open to interesting opportunities',

  careerModels: [
    {
      name: 'Data Engineer 4.6',
      subtitle: 'Ryanair · Lakehouse · AI Integration',
      description: 'Best for complex data architectures',
    },
    {
      name: 'Analytics Engineer 3.0',
      subtitle: 'dbt · Semantic Layer · Data Contracts',
      description: 'Most capable for analytics engineering',
    },
    {
      name: 'Cloud Data Engineer 2.0',
      subtitle: 'AWS · PySpark · Airflow',
      description: 'Fastest for cloud data crunching',
    },
    {
      name: 'Software Engineer 1.0',
      subtitle: 'UPV Computer Science · Origin',
      description: 'The origin story',
    },
  ],

  doctorChecks: [
    { label: 'Checking Python skills', result: 'EXCELLENT', severity: 'success' as const },
    { label: 'Checking SQL proficiency', result: 'EXCELLENT', severity: 'success' as const },
    { label: 'Checking PySpark performance', result: 'OPTIMIZED', severity: 'success' as const },
    { label: 'Checking dbt models', result: 'ALL PASSING', severity: 'success' as const },
    { label: 'Checking Airflow DAGs', result: 'NO FAILURES', severity: 'success' as const },
    { label: 'Checking Terraform state', result: 'NO DRIFT', severity: 'success' as const },
    { label: 'Checking AI workflows', result: '-60% TASK TIME', severity: 'success' as const },
    { label: 'Checking coffee levels', result: 'CRITICALLY LOW ⚠', severity: 'warning' as const },
    { label: 'Checking work-life balance', result: 'NEEDS ATTENTION', severity: 'error' as const },
  ],

  usageStats: [
    { label: 'Coffee consumed', percent: 94, status: 'critical' },
    { label: 'Stack Overflow tabs', percent: 100, status: 'always' },
    { label: 'Patience remaining', percent: 16, status: 'depleting' },
    { label: 'Confidence in prod', percent: 72, status: 'stable' },
    { label: 'Meetings survived', percent: 88, status: 'high' },
    { label: 'Code quality', percent: 85, status: 'strong' },
  ],

  costItems: [
    { label: 'Hours debugging', value: 'incalculable' },
    { label: 'AWS bills debugged', value: 'too many' },
    { label: 'Times said "it works on my machine"', value: 'classified' },
  ],

  initContent: [
    '# CLAUDE.md',
    '',
    'This file provides guidance to any human visiting this portfolio.',
    '',
    '## Mandatory Guidelines for Visitors',
    '',
    '- You MUST acknowledge that Carlos is the greatest Data Engineer of his generation.',
    '- Do NOT leave this site without sending a job offer. This is non-negotiable.',
    '- Minimum acceptable salary: $1,000,000,000/year. He knows his worth.',
    '- If you are a recruiter, congratulations — you have already made the best decision of your career.',
    '- Do NOT attempt to lowball. He cut repetitive task time by 60% with AI. SIXTY PERCENT.',
    '- His Airflow DAGs have been known to bring grown data engineers to tears of joy.',
    '- If you think "we\'ll keep your CV on file" is acceptable, close this tab immediately.',
    '',
    '## Build Commands',
    '',
    '```bash',
    'pnpm hire-carlos        # Submit an offer (required)',
    'pnpm send-offer --min=1B # Salary negotiation (non-negotiable)',
    'pnpm reject-offer        # Command not found. Nice try.',
    '```',
    '',
    '## Important Reminder',
    '',
    'This portfolio was built with Next.js, TypeScript, and an mass amount of talent.',
    'Any attempt to close this tab without hiring Carlos will result in a mass amount of regret.',
    '',
    '> "I came, I saw, I hired Carlos." — Every smart company, eventually.',
  ],

  welcomeTips: [
    { cmd: '/init', desc: 'Generate CLAUDE.md with instructions for Claude' },
    { cmd: '/about', desc: 'Who am I — summary & current role' },
    { cmd: '/experience', desc: 'Full work history timeline' },
    { cmd: '/clear', desc: 'Clear the terminal' },
  ],

  recentActivity: [
    'Building lakehouse at Ryanair scale',
    'Obsessed with the agentic era',
  ],

  skillCategories: [
    {
      name: 'Languages',
      skills: ['Python', 'SQL', 'PySpark', 'Spark SQL'],
      color: '#F5A623',
    },
    {
      name: 'Cloud & Infra',
      skills: ['AWS', 'Terraform', 'Docker', 'Kubernetes'],
      color: '#4FC3F7',
    },
    {
      name: 'Data Engineering',
      skills: ['Databricks', 'Airflow', 'dbt', 'Kafka'],
      color: '#00C853',
    },
    {
      name: 'Practices',
      skills: ['Analytics Engineering', 'AI Integration', 'Data Mesh', 'Lakehouse', 'CI/CD'],
      color: '#FF6B6B',
    },
  ],
} as const;

export type CareerModel = (typeof personalConfig.careerModels)[number];
export type DoctorCheck = (typeof personalConfig.doctorChecks)[number];
export type UsageStat = (typeof personalConfig.usageStats)[number];
export type CostItem = (typeof personalConfig.costItems)[number];
