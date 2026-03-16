import {
  dashboardStats,
  costSources,
  costTrend,
  infraStatus,
  aiRecommendations,
  savingsForecast
} from "../../mocks/dashboardData";

export async function getDashboardStats() {
  await new Promise((r) => setTimeout(r, 300));
  return dashboardStats;
}

export async function getCostSources() {
  await new Promise((r) => setTimeout(r, 300));
  return costSources;
}

export async function getCostTrend() {
  await new Promise((r) => setTimeout(r, 300));
  return costTrend;
}

export async function getInfraStatus() {
  await new Promise((r) => setTimeout(r, 300));
  return infraStatus;
}

export async function getAIRecommendations() {
  await new Promise((r) => setTimeout(r, 300));
  return aiRecommendations;
}

export async function getSavingsForecast() {
  await new Promise((r) => setTimeout(r, 300));
  return savingsForecast;
}