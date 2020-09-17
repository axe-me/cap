export interface Message {
  type: string;
  message: string;
}

export interface ApiResponse {
  data: any;
  message?: Message;
}
