# Pose Flow Application Overview

## Application Purpose

Pose Flow is a specialized mobile application designed for figure drawing sessions. It helps artists and models manage pose timing and selection during drawing sessions, with features for tracking modeling sessions, cataloging poses, and accessing resources related to figure drawing.

## Technology Stack

- **Frontend**: Angular with TypeScript
- **UI Framework**: Tailwind CSS with shadcn components
- **State Management**: 
- **Routing**: 
- **Backend**: 
- **Database**: 
  - Original: PostgreSQL with Neon Database (serverless)
  - Migration: SQLite for offline-first mobile functionality
- **ORM**: Drizzle ORM with SQLite adapter
- **Image Processing**: Native mobile capabilities (camera, gallery access)
- **AI Integration**: OpenAI API for pose analysis and keyword generation
- **Form Handling**: 
- **Deployment Target**: Mobile app stores (Apple App Store, Google Play Store)

## Database Migration

The application has been migrated from PostgreSQL to SQLite to support offline functionality on mobile devices. Key aspects of this migration include:

- **Array Storage**: Converting JavaScript arrays to JSON strings for SQLite storage
- **Date Handling**: Storing dates as ISO strings rather than Date objects
- **Schema Adaptation**: Adjusted schema definitions for SQLite compatibility
- **Query Adaptation**: Modified database queries to work with SQLite syntax
- **Type Handling**: Added conversion utilities between SQLite storage types and application types

## Core Application Screens

### 1. Main Menu Screen

**Purpose**: Central hub providing access to all app features.

**Components**:
- 2×3 grid of feature cards with distinctive icons and colors
- Quick action strip for frequently used features
- Bottom navigation bar for essential functions

**Key Functions**:
- Navigate to main app sections
- Quick-start a session with previous settings
- Access settings and user profile

### 2. Pose Library Screen

**Purpose**: Browse, search, and manage pose images.

**Components**:
- Grid display of pose thumbnails
- Filter bar for difficulty filtering
- Add pose button
- Search functionality

**Data Fields**:
- `poses`: Array of pose objects
- `id`: Unique pose identifier
- `url`: Image data URI or file path
- `keywords`: Array of descriptive keywords
- `difficultyLevel`: Numeric rating (1=Easy, 2=Medium, 3=Hard)
- `difficultyReason`: Explanation of difficulty rating
- `packId`: Optional reference to a pose pack

### 3. Add Pose Screen

**Purpose**: Add new poses to the library with appropriate metadata.

**Components**:
- Image selection/capture interface
- Keyword input with suggestions
- Difficulty selector
- Save/cancel buttons

**Data Fields**:
- `imageUri`: Source of the selected image
- `keywords`: Array of descriptive tags
- `difficultyLevel`: Numeric rating of pose difficulty
- `difficultyReason`: Text explanation of difficulty rating

### 4. Begin Pose Session Screen

**Purpose**: Configure and start a figure drawing session.

**Components**:
- Two-step flow (pose selection → session configuration)
- Natural language pose description input
- Time settings (per pose and total)
- Session mode selection

**Data Fields**:
- `poseDescription`: Natural language description for filtering poses
- `poseDifficulty`: Optional difficulty preference
- `poseCount`: Number of poses for the session
- `poseTime`: Duration for each pose
- `sessionDuration`: Total session time (alternative to pose count)
- `breakTime`: Optional time between poses
- `selectedPoses`: Array of poses for the session

### 5. Pose Timer Screen

**Purpose**: Run the actual drawing session with timed pose changes.

**Components**:
- Fullscreen pose display
- Minimalist UI with auto-hiding controls
- Timer display with progress indicator
- Next/previous pose controls
- Session progress indicator

**Data Fields**:
- `currentPose`: Active pose being displayed
- `timeRemaining`: Countdown for current pose
- `sessionProgress`: Completion percentage or fraction
- `isPaused`: Session pause state
- `isFullscreen`: Fullscreen mode state

### 6. Modeling Sessions Screen

**Purpose**: Track and manage sessions for professional figure models.

**Components**:
- List of past and upcoming modeling sessions
- Session detail view
- Add/edit session form
- Host management interface

**Data Fields**:
- `id`: Unique session identifier
- `title`: Session name or description
- `hostId`: Reference to session host
- `hostName`: Name of the host/organization
- `hostContactInfo`: Optional contact information
- `sessionDate`: Date of the modeling session
- `startTime`: Session start time
- `endTime`: Session end time
- `pay`: Payment amount
- `notes`: Additional session information
- `rating`: Model's rating of the session experience

### 7. Host Management Screen

**Purpose**: Manage organizations/individuals who host modeling sessions.

**Components**:
- List of hosts
- Host detail view
- Add/edit host form

**Data Fields**:
- `id`: Unique host identifier
- `name`: Host name or organization name
- `contactInfo`: Phone, email, or other contact method
- `location`: Optional location information
- `notes`: Additional host information
- `rating`: Average rating across sessions

### 8. Pose Store Screen

**Purpose**: Browse, preview, and download curated pose packs.

**Components**:
- Catalog of available pose packs
- Pack detail view with sample images
- Download mechanism
- Purchase interface for premium packs

**Data Fields**:
- `id`: Unique pack identifier
- `name`: Pack title
- `description`: Detailed description
- `poseCount`: Number of poses in the pack
- `categories`: Array of category tags
- `difficulty`: Average difficulty level
- `previewUrl`: Sample image or thumbnail
- `price`: Optional price for premium packs
- `isDownloaded`: Flag indicating local availability

### 9. Blog Screen

**Purpose**: Display articles about figure drawing and modeling.

**Components**:
- Article list with thumbnails and excerpts
- Article detail view with markdown content
- Category filtering

**Data Fields**:
- `id`: Unique article identifier
- `title`: Article headline
- `slug`: URL-friendly identifier
- `content`: Article body in markdown format
- `author`: Article writer
- `publishDate`: Publication date
- `tags`: Array of category tags
- `imageUrl`: Optional header image

## Data Models

### Pose
Central data model for pose images with related metadata:
```typescript
{
  id: number;
  url: string;
  keywords: string[];
  difficultyLevel: number;
  difficultyReason: string;
  packId?: number;
}
```
### PosePack
Collections of related poses available for download:
```typescript
{
  id: number;
  name: string;
  description: string;
  categories: string[];
  sampleImageUrls: string[];
  poseCount: number;
  isPremium: boolean;
  price?: number;
}
```

### ModelingSession
Records of professional modeling work:
```typescript
{
  id: number;
  title: string;
  hostId: number;
  hostName: string;
  hostContactInfo?: string;
  sessionDate: string;
  startTime?: string;
  endTime?: string;
  pay?: number;
  notes?: string;
  rating: number;
}
```

### Host
Organizations or individuals who run figure drawing sessions:
```typescript
{
  id: number;
  name: string;
  contactInfo?: string;
  location?: string;
  notes?: string;
  rating: number;
}
```

### BlogArticle
Educational content for users:
```typescript
{
  id: number;
  title: string;
  slug: string;
  content: string;
  author: string;
  publishDate: string;
  tags: string[];
  imageUrl?: string;
}
```

## Key Architectural Features
- Offline-First Design: SQLite database enables full functionality without internet connection
- Natural Language Pose Selection: Semantic matching of descriptions to pose keywords
- Mobile-Optimized Interface: Touch-friendly controls and appropriate viewport handling
- Hierarchical Keyword System: Weighted keywords for more accurate pose matching
- Persistence Layer Abstraction: Storage interface allowing database implementation swapping
-- Image Handling: Efficient storage and loading of pose images with size constraints
- Flexible Session Configuration: Multiple ways to configure drawing sessions
- Professional Tools: Features specifically for working figure models
