import { userSchema } from "@/types/schemas/~temp/user";
import { instance } from "@api/instance";

export default async (id: number) => {
  const response = await instance.get(`users/${id}`).json();
  return userSchema.parse(response);
};
