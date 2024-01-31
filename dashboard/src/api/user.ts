import request from '@/utils/request'

interface User {
    id: number
    nickname: string
    mobile: string
    intro: string
}
const url = "/user";
export async function created(data:User):Promise<User> {
  const req = request.post<User>(url, data);
  return req;
}
      