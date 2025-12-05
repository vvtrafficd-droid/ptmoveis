
import { Category, NavLink, Product } from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "Início", href: "#" },
  { 
    label: "Coleções", 
    href: "#collections",
    subcategories: [
      { label: "SOFÁS", href: "#sofas" },
      { label: "COLCHÕES", href: "#colchoes" },
      { label: "CAMAS DE CASAL", href: "#camas-casal" },
      { label: "CADEIRAS", href: "#cadeiras" },
      { label: "CAMAS DE SOLTEIRO", href: "#camas-solteiro" },
      { label: "MÓVEIS DE QUARTO", href: "#moveis-quarto" },
      { label: "MESAS E CADEIRAS", href: "#mesas-cadeiras" },
      { label: "CADEIRÕES", href: "#cadeiroes" },
      { label: "TOUCADOR", href: "#toucador" },
      { label: "APARADOR", href: "#aparador" },
      { label: "MÓVEL SALA", href: "#movel-sala" },
    ]
  },
  { label: "Sobre Nós", href: "#about" },
  { label: "Contato", href: "#contact" },
];

export const CATEGORIES: Category[] = [
  {
    id: "sofas",
    title: "Sofás",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVpxVx-7LmYkVH_atUPMT9T2zuTRCHnR9J2zfpCkyxJ4phZcrqb-cxPFgx7L1_6BJ9FjyTOesJPIeDhLyEFN9SVSLFoUH8033vB7Fg1fNwsjPqXcOKrdof3qeOxhfWSmRa_VJspKthSAoHfUiRRSWtY_X3DRqe8qx5R30Oja9gbuTRF8Rmm3kuhdu4aGYoKjL-_aFfTn8WYKfd2H66bB5JdplW7mUDU_bAzXKfAKYywCrRF0hFxT9_X_LNCAyi3XWb7CKHMmDfnyw",
  },
  {
    id: "camas",
    title: "Camas",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAk-4QN7_xwhhbtfKusdGkZ5NCNfZadAJirMsAHDR6yfArt3ynCSEmltdeOvvXPIVCSZOY4APe15PGcdPNuIWKb8w72vfqxBLFIWvZn8OX5JpUdn-fcIRTn9eIMnan1S_LWeXS_kYeI38b36YkWblYVgeGsmV5iLSI_Rei1ki6qxP2pa4O1WSNs1BQ5N-wt56VI4Doy6HWRwYGBfQUSJhDxU4suvldJ07dw6U49y7DIh_yVJgxHt008bzs2dvepcFatAMlXwSh14fg",
  },
  {
    id: "mesas",
    title: "Mesas de Jantar",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxfmQvlru4R7KUIQz1LYTi2t78isqXzQcbUhPd-9ukLUG5ohxMmf-HNGHn9A3RbGbHicuuXfPVfuHmOYLl6wE7oXhZCdTDBLv_uaNMlOtAoOUCqNxU7Xqv28u9XHZDltonQocmkNXBaW-rAd0tDu6lRCLBDBIV_pqXBN0-wNySMNnb4YYDjn8lnZsV3MCDnLu3Jg5RzbFpR1yqmvIJXMUoVdWDwyG-XaJJdpGGM5XrImyKQRD4mRz8o8BzngANiQK2D9QX9g8ZH2o",
  },
];

export const BEST_SELLERS: Product[] = [
  {
    id: "bs1",
    name: "Poltrona Nórdica",
    price: "R$ 1.299,00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAg-Ji92AMhk4meA77upDsZTzSlEVKyjTLhCyJfFCTMNnX01If9ZqbOE7klJmhCMQ-b1wzo_RUhsYhRpHmnA5g-ufa0ACPybQMXEW80jn5XoP6ePgZJ2MX_1kv_2yzceGdv1jBCGF1ELm2k_N99IH-ehRRVTD9WVHrfpFBuUILBzHt7kuH45hVeekSCaYJhjAOwwt-pmWDFQvBcoJ5qLBZSaoVUFnLft1mS1Q3dUTIHTBWKC9X0nok0kxv7VZV9e33oz1AfX9RnqOQ",
  },
  {
    id: "bs2",
    name: "Luminária de Chão",
    price: "R$ 789,90",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC36IwiQufkUVLYkHrkb3_zOaQJ2f-ENCzLh3TOF06b-6NZcASVacfm1wJsauM737j5Xz9q_mamC5AKON9z8QATrUC_tkFeYHuV-BlMEz-XIw96XJ-4CNQtjhIw8aC5yt7rAipQm4xERWpa022P0YbrqWFLdSF7-kGKrAOrG_x_fTbQrMTc3zBhpoaZuPFawl2sgL8xg1HXxQTPheaI54059lzcHb7ZwQ6Mvd18pM1sPI6eAUxZz86b44YK6Y1LepihmjYWpiRc0i0",
  },
  {
    id: "bs3",
    name: "Mesa de Apoio Mármore",
    price: "R$ 950,00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDA9qC4UpSX51mkQWIWvwzQ-oJrYEW7B0uQhxV01WvO0W927ZEVjtMlpevJclGH2HwUDp5rbB-TILAOvBYgLFXagUhnj0zitM2DbrWNjuKb0hoMMVTHxGT_iK4b9lEGDguUAFjuO292Fl6AW9a3UVdARuluIID6CQHwURmCot4xXwpMzikgKwUs4pthB9joSul3Y9KpNmJY4UrV8WPxBofaCEz5RBHJgr9mgfdOGOrV3PJ5HawSFptftvR_0gFPE_Cw1xW_NJhzzA",
  },
  {
    id: "bs4",
    name: "Sofá 2 Lugares",
    price: "R$ 2.450,00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ00NXnJBye5H-DygxAWdDqBgJ6UyVb-eVy7kg79wt4W0T6071v4squ-QC-lxXcT6w9gxE0tB_dJ14PK3lEyLFzg_JtlE_v52LURaSUs6oKPyeYt3BuThBGDijJJYba-OKgPGO-lVdNaiv6rT1MQbLHeaWcizWqCso5v1LRWuDvflYrmn8CizFauzSPaWqGhOzltqTJsjiwPkK2Oj_bGyYYgarlyRHd0GKDQCtyjZ8ZqHno2TNH_r0AkjLCRfPTZl26-h8fZpQf6M",
  },
];

export const BEDS: Product[] = [
  {
    id: "bed1",
    name: "Cama de Casal Carvalho",
    price: "R$ 3.200,00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMPwtdWeTHqJdbqCWFlteNkiUo-foUXKghS6xE7y1NLb9tUCkgOpBB3pm65fIUGNrzFY6J86C8n_hbktQ6wDv8OWy1XkoIMwmlImjfUSY99nWDl0qx9QvsHGEpPS6PQbxUT1Wud67ie4KvlOpBUbOktAsFj-u2eUDtAE4W1Ih1Xp_4xBFz1fUJdxCb6IYwuXmgLhduekJrnjd-jYmusU1Ft-hs81sHIbasxB_bfynnOwHvFT1gyOwBmgQdi4oyM6fddWMbrWBNLSc",
  },
  {
    id: "bed2",
    name: "Cama Estofada Cinza",
    price: "R$ 2.899,00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdnmRDJ3IfWExlwzYsV4qMokPoiN8bj5MXVfSzOvAJAHF7LxSHjf2ovaiObu3c6TdYXoU-M0nq064SYyNGmLhcOJkdm-6HxO7vR0EMqtF9GiV-5iQA5sBTLLRHW3v9UIhQHHZGLEtJhfovWYbpsxpacY6LOOg_9wmT2hjgaqACrFkhPHpHUihbvdJu9RqALflCjIfcWksEI2ImfO38Zpedn14LfL-oURiAqbPrM9xfvGPkdBJNNM8Q__h2gl9MDYo02sx4zgjrYRg",
  },
  {
    id: "bed3",
    name: "Cama Plataforma Japandi",
    price: "R$ 3.550,00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdtIw13GZLiFsFINMx9yeSh1-bcLCwn2iZ0-H0gBPsXu6bXeubTfFZ-VQSf_tn762Wo5roOXcDyMunuLWJD7wY3IWjKe98DrtaJlLD4DJ1qoRunSXoHAb9dGXRP9aAt15BqmLhCudg3IG8JD0pgUYXMKxTql078kPEkXGIbupPj-mwMFnprC6fwsRQKQjWgyYTGeyM7vWHgcRdxIk1Z6JTefTRKBduWa9rRf8x9AhDg6hNMUDY3g5rihf5kXVbPhFoBWL0k0CUS3M",
  },
  {
    id: "bed4",
    name: "Cama de Ferro Clássica",
    price: "R$ 1.980,00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQIj-3rByzqmH62-5aAPjGa483xcwja1YgAbg4ih87-i58kopsCUVac6xCCEMTDZQ_EnFIwNu5HPCxRrE_rYZL_H2iEdKbyftkWUysHqPXKLKiTvFU1W_CqPdWw7X5rsnnaQstZsEYVlF2dBDzCqGPPObrm7PRMxgzfV3A5E197KeBGlrI46nCu36ClQZI-wrtY4pZi2NtowU4ewI4i5l1ODoY6lfWV4Eutu7vIFi_EcpOyzWtu1VKPUgXS8zINtVHJO4G5MQgJpg",
  },
];

export const SIDEBOARDS: Product[] = [
  {
    id: "sb1",
    name: "Aparador de Madeira Maciça",
    price: "R$ 1.850,00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHuHRGh55Bm1L_n5PTVChNn5Ie-LK3HbyBb0FAwdHAg2HQ0avB-bxBSoPJ90RK0NTF6oBM8oCu33KU9skn5njAlGEcwQ9jDZ4IMksSZXNdE7w1-KCXNnIrjm024dHw6Z2Nb-4SUm1ufVK_K-sucMYTPeyIta8DkepTb85yZpB25-tlOTPjGmaYLvrHbSqb0E__FvuIkI82A7jYQb4BMGz0CM5HxYQUisW3Kt2hnGvddtUVJ3j4lsRyaKaVJhv2__I79wFlXwbw20o",
  },
  {
    id: "sb2",
    name: "Aparador Industrial Mármore",
    price: "R$ 2.100,00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnSGwXvgz0uNIfHD_avaN5Rp4jfopA9FnLTYz9hUmrnJ__p4VcywlaLDah7D-jwKix4aKAovN0_UJYyCgNruiChA7w76N54iEkkjs8Ted0XGPSJd_tMtaqtcH7ek2EL1yVDTKm4qt6pRefwqePGFSLhQ4L2ZAcyeabd5QWqJkYqmUGHWGGYTBtt__UXGPQhFax9l10zlg-YIvjPacsSnXBMoKxpU27Qt3pz1-WbXOQmxCxGoj7AjsP0o0hjNLe8hXON1bPMX8TPkA",
  },
  {
    id: "sb3",
    name: "Aparador Retrô Branco",
    price: "R$ 1.600,00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAU6DQDPUKYXjv3ezsRRW70lzQQfchszG9e1Ajlj4edPD3wNLc8BwN9amT5uLI47BEeBHs1BV5dDkQ94KCsPGAY3YvEI_szCok1gtuTWjMiQAQoYkj9lPGZ71qAHEQofeMA5ZtkXS7JxTTYvzSkNQtTywBDKxRGMXa1dOFtwe-vdWi0rkbOU5U5_OheLlv7iJ0wabWiAzPg3D-WV8RQFZXXHxfWkYVq9ry_UMeaFY1GU-PpXE8S66y9VHr1scHae4-uFnQEBsXp4s8",
  },
  {
    id: "sb4",
    name: "Aparador Vidro e Dourado",
    price: "R$ 2.300,00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxqUVmld83eXRgXRuoeCgcG8cZJBOtCYoI53xc3fwb-Q2oXiU71tJufezBfPIT2tjTHb9eRKEVz8bL7n2-L5ignDdRPj1y-e4R_6N5NCDOkGtDWT6AHFiLeTOiMmj6aDWU8EJZvg2Jxc_VpjhUp1W1PFUGsd0pAR-77uR1ACUfBRExSRdZxSF4SfLPLwL21RuvKGgvgaZBuZIHXikc0kYK6yi-LD0sjUfh6Szkt3l3UXNRKieX9JzvSHUQHJojaPlC7r8zjeyB4BI",
  },
];

export const SOFAS: Product[] = [
  {
    id: "sofa1",
    name: "Sofá de Canto Cinza",
    price: "R$ 4.500,00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqcppp27keYjx6aM5YPFpjlcBRmbS3YICFR812SMyRvM8SNIxmIWDtknR25vYEWpPUm_ZPkQ_3i6RPQmvuH2Ktp852-Lck_q_cJYBAkmXWkd_hr18plIlk6mfyh3GUANNzvqNIJDWG_zfFb2BAYfudcVHYCY_pr7N4AbFPlSrqnOUIs9Y9os60TNexz17X-dcCMWEJLSnAp0ONGeEaOIeWmFQ9tknwJDUz2WQuHMwoPvwmDo4JYJyQiKOVth-hS9h28ZMtayQxYnI",
  },
  {
    id: "sofa2",
    name: "Sofá Chesterfield Couro",
    price: "R$ 6.800,00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgt5gOYcWe2DmufLb29kXW0OUCOGfyE4hD7lRHeEO1jVHHs_RPAk-8ZQOIi37rOOGCDtzkS5GuLGN7JnS5Zx-zqB-PBRISGCUek7cBJm49piZXhA4tafD0S79isGR-sILiNAFFS-R0NINs8IAhwlZM6iDZc91yNdKop5tw2fZ4MfGrgqyCpBXNMlzn0IC2UEGZvqzCtBr9OgJIhDcLFKvw1YlNSecWMUa8FQnF9cwY2xR2OyCxeZPO88r-Dtlh0z2QSvMr_BbZCxE",
  },
  {
    id: "sofa3",
    name: "Sofá 3 Lugares Veludo Azul",
    price: "R$ 3.999,00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACgZ2Ci3uFkXer0eKueVo52qblVgdSt5I2dZ1CfLHh-S3gdt4e4Wzgt7TXqVTYADYAi9deXD_VpeT605uS_sAyKnz4dKztnYgH7U2uXj22uLDK8FV6SDyCbdmo35Cd1Fl1aV5RjMoos6uAU5zNLai20hRLOJ-9e-FoyACRJyhZzv8jC1ZVJBLGezTXWS_3UDM12hTO5WIA5kHW9lRI6U3JWIlEfHVwmOH-k2QAFWhw8fvHRH405J59c562eT9lXCBXQP0iwIp1KoE",
  },
  {
    id: "sofa4",
    name: "Sofá de Linho Bege",
    price: "R$ 3.150,00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAk3WKaM1SSpriCnBGut33hK0xu1C-PivRveyGe9Eop67fnHJtCyLqGEuyVF4Rq1DyjARoZqwIY26UpKiwVJMWFMYRJdz-8Q1lVlGsd8-Uv_S-PwTmZ6YAZOtYJCjzvxiqnBypfsM2yRy2SL0JzndXYT2u6uwRnYYowH80xKiL06c_V4qRGGpEK-qnfQlKBVK4oYbFavf_glTmeF9tzavNTgUKBd_rFxjv431VjbaAhuJiBsfrQ1RFu_jdIT9mQPOcBEiqxaEvebyQ",
  },
];
