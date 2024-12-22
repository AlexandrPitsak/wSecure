import { axiosInstance } from './axiosInstance';
import { TrapezoidData } from '../helper/trapezoidAreaCalculator';

export async function calculateArea({ url = '/calculate-area', method = 'post', data }: { url?: string; method?: string; data?: TrapezoidData }) {
    return axiosInstance.request({ url: url, method: method, data: data });
}
