declare interface ApiResponse<T = unknown> {
  success: boolean;
  time: string;
  maintenance_info: null | string;
  result: {
    title: string;
    message: string;
    data: T;
  };
}
