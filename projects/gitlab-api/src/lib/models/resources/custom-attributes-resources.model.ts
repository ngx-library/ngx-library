import { encodeId, safeContext } from './utils.model';

export const CUSTOM_ATTRIBUTES_RESOURCES = {
  CUSTOM_ATTRIBUTES: (customAttributeKey?: string, context?: string) =>
    `${safeContext(context)}/custom_attributes${encodeId(customAttributeKey)}`
};
