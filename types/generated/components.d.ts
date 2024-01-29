import type { Schema, Attribute } from '@strapi/strapi';

export interface TestimonialsTestimonials extends Schema.Component {
  collectionName: 'components_testimonials_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'thumbUp';
  };
  attributes: {
    Testimonial: Attribute.Text;
    UserName: Attribute.String;
    Designation: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'testimonials.testimonials': TestimonialsTestimonials;
    }
  }
}
