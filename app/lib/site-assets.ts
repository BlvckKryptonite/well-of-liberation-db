const BUILDER_IMAGE = (id: string) =>
  `https://cdn.builder.io/api/v1/image/assets%2F9d00a4475b9148b586b0f1030cbea4c8%2F${id}?format=webp&width=800&height=1200`;

const BUILDER_OBJECT = (path: string) =>
  `https://cdn.builder.io/o/assets%2F9d00a4475b9148b586b0f1030cbea4c8%2F${path}`;

export const SITE_IMAGES = {
  logo: BUILDER_IMAGE("3334ec4aed7a4da491ee551032c35dc2"),
  heroCampaign: BUILDER_IMAGE("9752631bab2841409a9d9468eccbecac"),
  smallActs: BUILDER_IMAGE("cdb9422eba384e9185277d5fc99c6c76"),
  field1: BUILDER_OBJECT(
    "8c3ecae7b4934b72aa30fb2d374f3f21?alt=media&token=4ad92cbf-c4d5-4529-97e6-813187069e14&apiKey=9d00a4475b9148b586b0f1030cbea4c8",
  ),
  field2: BUILDER_OBJECT(
    "eabdecb9f4154663924998663730c6c3?alt=media&token=40e4d33d-bddb-4724-80f6-feda3f81f4ab&apiKey=9d00a4475b9148b586b0f1030cbea4c8",
  ),
  field3: BUILDER_OBJECT(
    "2bef9d3a39404c52a73fb4e56511fc82?alt=media&token=373ab221-c2e5-4c2b-858d-f18526bff54d&apiKey=9d00a4475b9148b586b0f1030cbea4c8",
  ),
} as const;
