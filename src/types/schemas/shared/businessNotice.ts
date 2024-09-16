import { z } from "zod";

import { LocalizedStringSchema } from "./localizedString";

export const BusinessNoticeSchema = z.object({
  noticeTitle: LocalizedStringSchema,
  noticeMessage: LocalizedStringSchema,
});
