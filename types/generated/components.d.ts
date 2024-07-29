import type { Schema, Attribute } from '@strapi/strapi';

export interface MetaMeta extends Schema.Component {
  collectionName: 'components_meta_metas';
  info: {
    displayName: 'Meta';
    icon: 'dashboard';
  };
  attributes: {
    meta_title: Attribute.String;
    meta_description: Attribute.Text;
    slug: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'meta.meta': MetaMeta;
    }
  }
}
