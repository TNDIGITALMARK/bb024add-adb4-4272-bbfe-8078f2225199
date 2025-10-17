# PokeTrade Connect - Design System

## Visual Analysis from Reference Image

### Color Palette
- **Primary Navy**: #1E2949 (dark blue header/footer background)
- **Electric Blue**: #4A90E2 (hero section gradient background)
- **Bright Yellow**: #FFB84D (accent color, CTA buttons, card borders)
- **Orange Accent**: #FF8C42 (secondary accent in hero gradient)
- **White**: #FFFFFF (card backgrounds, clean surfaces)
- **Light Gray**: #F5F5F5 (page background)
- **Dark Text**: #2D3748 (body text)
- **Light Text**: #FFFFFF (text on dark backgrounds)

### Typography
- **Headers**: Bold, sans-serif (Pokemon-inspired clean modern font)
- **Body**: Clean sans-serif (readable, professional)
- **Card Names**: Medium weight, clear legibility
- **Sizes**:
  - Hero H1: 48px bold
  - Section H2: 32px bold
  - Card Title: 16px medium
  - Body: 14px regular
  - Caption: 12px regular

### Layout & Spacing
- **Card Dimensions**: 150x210px (authentic Pokemon card proportions)
- **Grid Gap**: 16px between cards
- **Section Padding**: 48px vertical, 24px horizontal
- **Border Radius**: 12px (cards), 8px (buttons), 16px (containers)
- **Container Max Width**: 1200px

### Component Patterns

#### Navigation
- Dark navy background (#1E2949)
- Logo on left with Pokeball icon
- Horizontal menu items (Collection, Trade, Market, Profile)
- Yellow "Login/Join" CTA button on right
- Height: 64px

#### Hero Section
- Gradient background (blue to orange circular gradient)
- Large bold headline with yellow accent underline
- Mobile phone mockup showing app interface
- 3-step process icons below (Upload, Browse, Exchange)

#### Card Display
- White background with subtle shadow
- Pokemon card image fills frame
- Rounded corners (12px)
- Hover state: slight scale + deeper shadow
- Grid layout: 3 columns desktop, 2 tablet, 1 mobile

#### Footer
- Same dark navy as header
- Newsletter signup form with white inputs
- Yellow submit button matching CTA style
- Social media icons
- Links organized in columns

### Image Treatment Standards
- **Card Images**: Drop shadow (0 4px 12px rgba(0,0,0,0.15))
- **Hero Phone**: Prominent shadow for depth
- **Border Radius**: Consistent 12px for cards
- **Aspect Ratios**:
  - Pokemon cards: 2:3 ratio
  - Featured images: 16:9 ratio
  - Profile avatars: 1:1 ratio

### Interaction Patterns
- **Button Hover**: Brightness increase, slight scale (1.02)
- **Card Hover**: Transform scale(1.05), shadow elevation
- **Toggle Active**: Yellow background, white icon
- **Input Focus**: Blue border, subtle glow

### Mobile Responsiveness
- Bottom tab navigation (Collection, Market, Trades, Profile)
- Touch-friendly tap targets (minimum 44px)
- Single column card grid
- Collapsible filters
- Swipeable card galleries

### Accessibility
- WCAG 2.1 AA compliant contrast ratios
- Focus indicators on all interactive elements
- Semantic HTML structure
- ARIA labels for icon buttons
- Alt text for all card images
