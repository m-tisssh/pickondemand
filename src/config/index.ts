export const PRODUCT_CATEGORIES = [
  {
    label: 'Кружки',
    value: 'cups' as const,
    featured: [
      {
        name: 'Выбор редактора',
        href: '#',
        imageSrc: '/nav/cups/cup_1.jpg',
      },
      {
        name: 'Новые поступления',
        href: '#',
        imageSrc: '/nav/cups/cup_2.webp',
      },
      {
        name: 'Бестселлер',
        href: '#',
        imageSrc: '/nav/cups/cup_3.webp',
      },
    ],
  },
  {
    label: 'Футболки',
    value: 'tshirt' as const,
    featured: [
      {
        name: 'Любимые футболки',
        href: '#',
        imageSrc: '/nav/tshirt/tshirt_1.webp',
      },
      {
        name: 'Новые поступления',
        href: '#',
        imageSrc: '/nav/tshirt/tshirt_2.webp',
      },
      {
        name: 'Бестселлер',
        href: '#',
        imageSrc: '/nav/tshirt/tshirt_3.webp',
      },
    ],
  },
]