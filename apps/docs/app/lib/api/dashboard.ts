import {dashboardStats, costSources} from "../../mocks/dashboardData";

export async function gertDashboardStats() {

    await new Promise((resolve) => setTimeout(resolve, 500)); 

}

export async function getCostSources() {

    await new Promise((resolve) => setTimeout(resolve, 500)); 
    return costSources;
}