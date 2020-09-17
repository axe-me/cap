import { DirectiveBinding } from "vue";

function toggleLoading(el: HTMLElement, isLoading: boolean) {
  const overlay = el.querySelector(".loader-overlay") as HTMLElement;
  el.dataset.elPositon = el.style.position;
  const hasPosRel = el.classList.contains("position-relative");
  if (isLoading) {
    if (!hasPosRel) {
      el.classList.add("position-relative");
    }
    overlay.classList.add("d-flex");
    overlay.style.height = `${el.style.height}px`;
  } else {
    overlay.classList.remove("d-flex");
    if (!hasPosRel) {
      el.classList.remove("position-relative");
      el.style.position = el.dataset.elPositon;
    }
  }
}

const loading = {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    const overlay = document.createElement("div");
    overlay.className = "loader-overlay";
    const spinner = document.createElement("div");
    spinner.classList.add("spinner");
    overlay.appendChild(spinner);
    el.appendChild(overlay);
    toggleLoading(el, binding.value);
  },
  updated: function(el: HTMLElement, binding: DirectiveBinding) {
    toggleLoading(el, binding.value);
  }
};

export default loading;
