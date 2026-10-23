import { permanentRedirect } from "next/navigation";

// The template blog was retired — editorial guides live at /guides.
export default function BlogIndexRedirect() {
  permanentRedirect("/guides");
}
