import { User, SignInDTO } from "@/types/User";
import { Ref, reactive } from "vue";
import { useStorage } from "@vueuse/core";
import { Message } from "@/types/Common";

export function getUser(): Ref<User | null> {
  const user = useStorage("user", null);
  return user.value ? JSON.parse(user.value) : null;
}

export function logout(): void {
  const user = useStorage("user", null);
  user.value = null;
}

export function signIn(dto: SignInDTO) {
  const user = useStorage("user", null);

  const message: Message = reactive({
    type: "success",
    message: "successSignIn"
  });

  if (dto.email === "axe@axe.me" && dto.password === "axeaxe") {
    user.value = JSON.stringify({
      id: 1,
      name: "Axe",
      email: "axe@axe.me"
    });
  } else {
    message.type = "error";
    message.message = "wrongCredential";
  }

  return {
    user,
    message
  };
}
