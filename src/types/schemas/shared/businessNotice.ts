import { z } from "zod";

import { LocalizedStringSchema } from "../store/localizedString";

export const BusinessNoticeSchema = z.object({
  noticeTitle: LocalizedStringSchema,
  noticeMessage: LocalizedStringSchema,
});
