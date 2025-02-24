import { TestimonialCarousel } from "./TestimonialCarousel";
 
import resume from ".././app/resume.json";


export default function Testimonials() {
  const { mentalHealthTestimonials } = resume;
  return <TestimonialCarousel testimonials={mentalHealthTestimonials} />;
}
