import { notFound } from 'next/navigation'
import { VideoPlayer } from '@/components/video-player'
import { MaterialChecklist } from '@/components/material-checklist'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Download, Play, Leaf, Clock, ArrowLeft, CheckCircle } from 'lucide-react'
import Link from 'next/link'

interface LessonPageProps {
  params: {
    slug: string
  }
}

// Static lesson data for MVP
const lessons: Record<string, any> = {
  'august-1': {
    title: 'Welcome to School',
    description: 'Help your little one get excited about learning! This introductory lesson covers school routines, classroom expectations, and the joy of learning together.',
    theme_week: 'Month 1: At School',
    week: 'Week 1',
    duration: '8 min',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    materials: [
      '🧸 Ivy Doll (from your monthly box)',
      '📋 Welcome to School activity sheet',
      '🖍️ Crayons or colored pencils',
      '📷 Camera or phone for photos',
      '🎒 Small backpack or bag'
    ],
    learning_objectives: [
      'Understand what school is and why we go',
      'Practice school routines like sitting and listening',
      'Express excitement about learning',
      'Identify school supplies and their uses'
    ],
    activities: [
      {
        title: 'School Supply Hunt',
        description: 'Help Ivy find her school supplies around the house',
        duration: '5 minutes'
      },
      {
        title: 'Practice Sitting Criss-Cross',
        description: 'Learn the proper way to sit for circle time',
        duration: '3 minutes'
      },
      {
        title: 'Pack Your Learning Bag',
        description: 'Choose special items for your first day',
        duration: '5 minutes'
      }
    ],
    color: 'bright-green'
  },
  'august-2': {
    title: 'Classroom Rules',
    description: 'Learn the important rules that help everyone have fun and stay safe at school. Practice listening, sharing, and being kind to friends.',
    theme_week: 'Month 1: At School',
    week: 'Week 1',
    duration: '6 min',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    materials: [
      '📋 Classroom Rules poster (from activity packet)',
      '⭐ Star stickers',
      '🖍️ Crayons',
      '🪞 Mirror (for practicing kind faces)',
      '🧸 Ivy Doll'
    ],
    learning_objectives: [
      'Learn basic classroom rules and expectations',
      'Practice using kind words and actions',
      'Understand the importance of sharing',
      'Demonstrate good listening skills'
    ],
    activities: [
      {
        title: 'Rules Role Play',
        description: 'Act out different classroom scenarios with Ivy',
        duration: '4 minutes'
      },
      {
        title: 'Kind Words Practice',
        description: 'Practice saying please, thank you, and excuse me',
        duration: '3 minutes'
      },
      {
        title: 'Listening Game',
        description: 'Follow simple directions and listen carefully',
        duration: '5 minutes'
      }
    ],
    color: 'bright-yellow'
  },
  'august-3': {
    title: 'Making Friends',
    description: 'Discover the joy of friendship! Learn how to introduce yourself, share toys, and be a good friend to others.',
    theme_week: 'Month 1: At School',
    week: 'Week 1',
    duration: '7 min',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    materials: [
      '🧸 Ivy Doll and a stuffed animal friend',
      '🎭 Friendship bracelet materials (from box)',
      '📋 "All About Me" sheet',
      '🖍️ Crayons',
      '📷 Camera for friend photos'
    ],
    learning_objectives: [
      'Learn how to introduce yourself to new friends',
      'Practice sharing and taking turns',
      'Understand what makes a good friend',
      'Express kindness and empathy'
    ],
    activities: [
      {
        title: 'Introduction Practice',
        description: 'Practice saying "Hi, I\'m..." with confidence',
        duration: '3 minutes'
      },
      {
        title: 'Friendship Bracelet Making',
        description: 'Create a special bracelet for a friend',
        duration: '8 minutes'
      },
      {
        title: 'Sharing Circle',
        description: 'Practice sharing toys and saying kind words',
        duration: '4 minutes'
      }
    ],
    color: 'bright-pink'
  },
  'august-4': {
    title: 'School Helpers',
    description: 'Meet the special people who help us at school! Learn about teachers, principals, and other helpers who keep school fun and safe.',
    theme_week: 'Month 1: At School',
    week: 'Week 1',
    duration: '9 min',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    materials: [
      '👩‍🏫 School helpers matching cards (from packet)',
      '🎭 Dress-up items or hats',
      '📋 "Thank You" card template',
      '🖍️ Crayons',
      '🧸 Ivy Doll'
    ],
    learning_objectives: [
      'Identify different school helpers and their jobs',
      'Understand how helpers keep school safe and fun',
      'Practice saying thank you to helpers',
      'Express appreciation for community helpers'
    ],
    activities: [
      {
        title: 'Helper Match Game',
        description: 'Match school helpers with their tools',
        duration: '5 minutes'
      },
      {
        title: 'Dress Up Play',
        description: 'Pretend to be different school helpers',
        duration: '6 minutes'
      },
      {
        title: 'Thank You Card Making',
        description: 'Create a special card for a school helper',
        duration: '7 minutes'
      }
    ],
    color: 'bright-purple'
  },
  'august-5': {
    title: 'My School Day',
    description: 'Put it all together! Practice a full school day routine from arrival to pickup, including all the fun learning activities.',
    theme_week: 'Month 1: At School',
    week: 'Week 1',
    duration: '8 min',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    materials: [
      '📅 Daily schedule visual (from packet)',
      '🧸 Ivy Doll',
      '🎒 Small backpack',
      '📓 Pretend journal',
      '⏰ Clock or timer'
    ],
    learning_objectives: [
      'Understand the sequence of a school day',
      'Practice transitions between activities',
      'Follow a visual schedule independently',
      'Feel confident about school routines'
    ],
    activities: [
      {
        title: 'Schedule Walk-Through',
        description: 'Practice each part of the school day',
        duration: '8 minutes'
      },
      {
        title: 'Transition Practice',
        description: 'Practice moving between different activities',
        duration: '5 minutes'
      },
      {
        title: 'School Day Story',
        description: 'Tell the story of your perfect school day',
        duration: '4 minutes'
      }
    ],
    color: 'bright-green'
  },
  // Week 2 Lessons
  'august-6': {
    title: 'Listening Ears',
    description: 'Develop super listening skills! Learn how to pay attention, follow directions, and show others you are listening with your whole body.',
    theme_week: 'Month 1: At School',
    week: 'Week 2',
    duration: '7 min',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    materials: [
      '👂 Listening ears headband craft (from packet)',
      '🎵 Musical instrument or bell',
      '📋 Following directions activity cards',
      '🧸 Ivy Doll',
      '⭐ Good listener stickers'
    ],
    learning_objectives: [
      'Practice active listening skills',
      'Follow 2-3 step directions',
      'Show listening with body language',
      'Understand the importance of paying attention'
    ],
    activities: [
      {
        title: 'Simon Says Listening Game',
        description: 'Practice following directions carefully',
        duration: '6 minutes'
      },
      {
        title: 'Make Listening Ears',
        description: 'Create a special headband to remind us to listen',
        duration: '8 minutes'
      },
      {
        title: 'Quiet Voices Practice',
        description: 'Learn when to use inside voices vs outside voices',
        duration: '4 minutes'
      }
    ],
    color: 'bright-yellow'
  },
  'august-7': {
    title: 'Sharing is Caring',
    description: 'Learn the joy of sharing! Practice taking turns, sharing toys, and understanding that sharing makes everyone happy.',
    theme_week: 'Month 1: At School',
    week: 'Week 2',
    duration: '8 min',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    materials: [
      '🧸 Ivy Doll and friend toys',
      '⏰ Timer for turn-taking',
      '🎲 Sharing games (from packet)',
      '🍪 Pretend snacks to share',
      '💝 Sharing chart with stickers'
    ],
    learning_objectives: [
      'Understand the concept of taking turns',
      'Practice sharing toys and materials',
      'Express feelings about sharing',
      'Recognize sharing makes friends happy'
    ],
    activities: [
      {
        title: 'Turn-Taking Timer Game',
        description: 'Practice waiting for your turn with a timer',
        duration: '6 minutes'
      },
      {
        title: 'Snack Sharing Circle',
        description: 'Practice sharing pretend snacks fairly',
        duration: '5 minutes'
      },
      {
        title: 'Sharing Story Time',
        description: 'Read and act out stories about sharing',
        duration: '7 minutes'
      }
    ],
    color: 'bright-pink'
  },
  'august-8': {
    title: 'Line Up Time',
    description: 'Master the art of lining up! Learn how to wait patiently, keep hands to yourself, and move safely with the class.',
    theme_week: 'Month 1: At School',
    week: 'Week 2',
    duration: '5 min',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    materials: [
      '👣 Footprint markers (from packet)',
      '🧸 Ivy Doll and friends',
      '🎵 Quiet line songs list',
      '📏 Measuring tape for spacing',
      '⭐ Line leader badge'
    ],
    learning_objectives: [
      'Practice standing in line properly',
      'Keep appropriate space between friends',
      'Wait quietly and patiently',
      'Take turns being line leader'
    ],
    activities: [
      {
        title: 'Line Up Practice',
        description: 'Practice making a straight, quiet line',
        duration: '5 minutes'
      },
      {
        title: 'Bubble Space Game',
        description: 'Learn to keep personal space bubbles',
        duration: '4 minutes'
      },
      {
        title: 'Line Leader Fun',
        description: 'Take turns being the special line leader',
        duration: '6 minutes'
      }
    ],
    color: 'bright-purple'
  },
  'august-9': {
    title: 'Quiet Voices',
    description: 'Discover the power of using your inside voice! Learn when to whisper, when to talk normally, and how quiet voices help everyone learn.',
    theme_week: 'Month 1: At School',
    week: 'Week 2',
    duration: '6 min',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    materials: [
      '🔊 Voice level chart (from packet)',
      '🤫 Quiet mouse puppet or toy',
      '📢 Picture cards showing different voice levels',
      '🧸 Ivy Doll',
      '⭐ Quiet voice stickers'
    ],
    learning_objectives: [
      'Distinguish between inside and outside voices',
      'Practice whispering and quiet talking',
      'Understand when different voice levels are appropriate',
      'Show respect for others by using quiet voices'
    ],
    activities: [
      {
        title: 'Voice Level Practice',
        description: 'Practice different voice levels with fun activities',
        duration: '5 minutes'
      },
      {
        title: 'Quiet Mouse Game',
        description: 'Follow the quiet mouse and practice whispering',
        duration: '4 minutes'
      },
      {
        title: 'Library Voices',
        description: 'Practice using special quiet library voices',
        duration: '6 minutes'
      }
    ],
    color: 'bright-green'
  },
  'august-10': {
    title: 'Clean Up Fun',
    description: 'Make cleaning up an adventure! Learn how to put toys away properly, work as a team, and keep our learning space organized and ready.',
    theme_week: 'Month 1: At School',
    week: 'Week 2',
    duration: '7 min',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    materials: [
      '🧹 Child-sized cleaning supplies',
      '📦 Sorting bins with labels',
      '🎵 Clean up songs playlist',
      '🧸 Ivy Doll',
      '⏰ Clean up timer'
    ],
    learning_objectives: [
      'Learn where different items belong',
      'Practice sorting and organizing',
      'Work together as a team to clean',
      'Take pride in a clean, organized space'
    ],
    activities: [
      {
        title: 'Sorting Challenge',
        description: 'Sort toys and materials into the right bins',
        duration: '6 minutes'
      },
      {
        title: 'Clean Up Race',
        description: 'See how quickly we can clean up together',
        duration: '5 minutes'
      },
      {
        title: 'Organization Station',
        description: 'Create special places for everything',
        duration: '8 minutes'
      }
    ],
    color: 'bright-yellow'
  },
  'august-11': {
    title: 'Letters in My Name',
    description: 'Discover the magic of letters! Learn to recognize and write the letters in your name, and understand that letters make words.',
    theme_week: 'Month 1: At School',
    week: 'Week 3',
    duration: '9 min',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    materials: [
      '📝 Name tracing cards (from packet)',
      '🖍️ Jumbo crayons',
      '🔤 Alphabet foam letters',
      '🧸 Ivy Doll',
      '⭐ Letter stickers'
    ],
    learning_objectives: [
      'Recognize the letters in their name',
      'Practice proper letter formation',
      'Understand that letters make words',
      'Develop fine motor skills for writing'
    ],
    activities: [
      {
        title: 'Name Letter Hunt',
        description: 'Find the letters of your name around the house',
        duration: '6 minutes'
      },
      {
        title: 'Letter Tracing Fun',
        description: 'Practice writing your name letters',
        duration: '8 minutes'
      },
      {
        title: 'Name Song Dance',
        description: 'Sing and move to the letters in your name',
        duration: '5 minutes'
      }
    ],
    color: 'bright-green'
  },
  'august-12': {
    title: 'Counting to 10',
    description: 'Explore numbers through fun counting games! Learn to count objects, recognize numerals, and understand that numbers represent quantities.',
    theme_week: 'Month 1: At School',
    week: 'Week 3',
    duration: '8 min',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    materials: [
      '🔢 Number cards 1-10 (from packet)',
      '🧮 Counting bears or blocks',
      '📋 Number tracing sheet',
      '🧸 Ivy Doll',
      '⭐ Number stickers'
    ],
    learning_objectives: [
      'Count objects from 1 to 10',
      'Recognize numerals 1-10',
      'Practice one-to-one correspondence',
      'Understand that numbers represent quantity'
    ],
    activities: [
      {
        title: 'Counting Bears Game',
        description: 'Count colorful bears and match to numbers',
        duration: '7 minutes'
      },
      {
        title: 'Number Hunt',
        description: 'Find numbers around your home',
        duration: '5 minutes'
      },
      {
        title: 'Number Tracing',
        description: 'Practice writing numbers 1-10',
        duration: '6 minutes'
      }
    ],
    color: 'bright-yellow'
  },
  'august-13': {
    title: 'Colors Everywhere',
    description: 'Dive into the world of colors! Learn to identify primary colors, explore color mixing, and find colors all around us.',
    theme_week: 'Month 1: At School',
    week: 'Week 3',
    duration: '7 min',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    materials: [
      '🎨 Color mixing cups',
      '🖍️ Primary color crayons',
      '📋 Color sorting activity (from packet)',
      '�� Ivy Doll',
      '🌈 Color wheel poster'
    ],
    learning_objectives: [
      'Identify primary colors (red, blue, yellow)',
      'Explore basic color mixing',
      'Sort objects by color',
      'Find colors in the environment'
    ],
    activities: [
      {
        title: 'Color Mixing Magic',
        description: 'Mix primary colors to make new colors',
        duration: '8 minutes'
      },
      {
        title: 'Rainbow Hunt',
        description: 'Find items of each color around the house',
        duration: '6 minutes'
      },
      {
        title: 'Color Sorting Game',
        description: 'Sort objects into color groups',
        duration: '5 minutes'
      }
    ],
    color: 'bright-pink'
  },
  'august-14': {
    title: 'Shape Detective',
    description: 'Become a shape detective! Learn to identify basic shapes, find them in everyday objects, and create shape art.',
    theme_week: 'Month 1: At School',
    week: 'Week 3',
    duration: '8 min',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    materials: [
      '🔷 Shape cutouts (circle, square, triangle)',
      '🔍 Magnifying glass (toy)',
      '📋 Shape hunt checklist (from packet)',
      '🧸 Ivy Doll',
      '🎨 Shape stamps'
    ],
    learning_objectives: [
      'Identify basic shapes: circle, square, triangle',
      'Find shapes in everyday objects',
      'Describe shape characteristics',
      'Create art using shapes'
    ],
    activities: [
      {
        title: 'Shape Hunt Adventure',
        description: 'Search for shapes around your home',
        duration: '7 minutes'
      },
      {
        title: 'Shape Building Fun',
        description: 'Build pictures using shape cutouts',
        duration: '6 minutes'
      },
      {
        title: 'Shape Stamp Art',
        description: 'Create beautiful art with shape stamps',
        duration: '8 minutes'
      }
    ],
    color: 'bright-purple'
  },
  'august-15': {
    title: 'Pattern Play',
    description: 'Discover the fun of patterns! Learn to recognize, continue, and create simple patterns using colors, shapes, and movements.',
    theme_week: 'Month 1: At School',
    week: 'Week 3',
    duration: '6 min',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    materials: [
      '🔵 Pattern blocks (colored shapes)',
      '📋 Pattern cards (from packet)',
      '🧸 Ivy Doll',
      '⭐ Pattern stickers',
      '🎵 Music for movement patterns'
    ],
    learning_objectives: [
      'Recognize simple AB patterns',
      'Continue existing patterns',
      'Create their own patterns',
      'Use body movements to make patterns'
    ],
    activities: [
      {
        title: 'Pattern Block Fun',
        description: 'Create patterns with colored blocks',
        duration: '6 minutes'
      },
      {
        title: 'Movement Patterns',
        description: 'Make patterns with claps, stomps, and wiggles',
        duration: '5 minutes'
      },
      {
        title: 'Pattern Art',
        description: 'Paint or draw your own patterns',
        duration: '7 minutes'
      }
    ],
    color: 'bright-green'
  },
  'august-16': {
    title: 'Germ Busters',
    description: 'Learn how to stay healthy at school! Discover proper handwashing, covering coughs, and other healthy habits that keep everyone safe.',
    theme_week: 'Month 1: At School',
    week: 'Week 4',
    duration: '7 min',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    materials: [
      '🧼 Soap and towel',
      '🎵 Handwashing song (from packet)',
      '🧸 Ivy Doll',
      '⭐ Healthy habit stickers',
      '🤧 Tissues for practice'
    ],
    learning_objectives: [
      'Learn proper handwashing technique',
      'Practice covering coughs and sneezes',
      'Understand why we wash hands',
      'Develop healthy school habits'
    ],
    activities: [
      {
        title: 'Super Handwashing',
        description: 'Practice the 20-second handwashing song',
        duration: '5 minutes'
      },
      {
        title: 'Cough and Sneeze Practice',
        description: 'Learn to cover coughs with elbow',
        duration: '4 minutes'
      },
      {
        title: 'Germ Detective',
        description: 'Learn where germs hide and how to stop them',
        duration: '6 minutes'
      }
    ],
    color: 'bright-yellow'
  },
  'august-17': {
    title: 'Rainbow Colors',
    description: 'Create a beautiful rainbow! Learn about all the colors of the rainbow, sing the rainbow song, and make rainbow art.',
    theme_week: 'Month 1: At School',
    week: 'Week 4',
    duration: '8 min',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    materials: [
      '🌈 Rainbow coloring sheet (from packet)',
      '🖍️ All color crayons',
      '🎨 Watercolor paints',
      '🧸 Ivy Doll',
      '🎵 Rainbow song lyrics'
    ],
    learning_objectives: [
      'Learn the colors of the rainbow in order',
      'Sing the rainbow song',
      'Create rainbow art',
      'Understand how rainbows form'
    ],
    activities: [
      {
        title: 'Rainbow Song and Dance',
        description: 'Sing and move to the rainbow song',
        duration: '5 minutes'
      },
      {
        title: 'Rainbow Art Creation',
        description: 'Paint or color a beautiful rainbow',
        duration: '10 minutes'
      },
      {
        title: 'Rainbow Scavenger Hunt',
        description: 'Find items of each rainbow color',
        duration: '7 minutes'
      }
    ],
    color: 'bright-pink'
  },
  'august-18': {
    title: 'Special School Buddy',
    description: 'Create your very own classroom buddy! Use materials from your monthly box to make a special friend who will join you for all your learning adventures.',
    theme_week: 'Month 1: At School',
    week: 'Week 4',
    duration: '10 min',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    materials: [
      '👁️ Googly eyes (from monthly box)',
      '⚪ Fluffy balls (from monthly box)',
      '🧷 Glue stick',
      '🖍️ Markers for decorating',
      '�� Ivy Doll as helper'
    ],
    learning_objectives: [
      'Follow multi-step craft instructions',
      'Develop fine motor skills',
      'Express creativity and personality',
      'Create a learning companion'
    ],
    activities: [
      {
        title: 'Buddy Building',
        description: 'Assemble your school buddy step by step',
        duration: '12 minutes'
      },
      {
        title: 'Buddy Naming',
        description: 'Choose a special name for your new friend',
        duration: '3 minutes'
      },
      {
        title: 'Buddy Introduction',
        description: 'Introduce your buddy to the family',
        duration: '5 minutes'
      }
    ],
    color: 'bright-purple'
  },
  'august-19': {
    title: 'Show and Tell',
    description: 'Practice sharing with confidence! Learn how to show something special, tell about it clearly, and listen respectfully to others.',
    theme_week: 'Month 1: At School',
    week: 'Week 4',
    duration: '9 min',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    materials: [
      '🧸 Special toy or object to share',
      '🎤 Pretend microphone',
      '📋 Show and tell tips card (from packet)',
      '🧸 Ivy Doll',
      '⭐ Brave speaker stickers'
    ],
    learning_objectives: [
      'Practice speaking in front of others',
      'Learn to describe objects clearly',
      'Develop listening skills',
      'Build confidence in sharing'
    ],
    activities: [
      {
        title: 'Practice Presentation',
        description: 'Practice showing and telling about your object',
        duration: '8 minutes'
      },
      {
        title: 'Listening Skills',
        description: 'Practice being a good audience member',
        duration: '4 minutes'
      },
      {
        title: 'Question Time',
        description: 'Learn to ask and answer questions politely',
        duration: '6 minutes'
      }
    ],
    color: 'bright-green'
  },
  'august-20': {
    title: 'August Celebration',
    description: 'Celebrate all we\'ve learned this month! Review our school skills, share our favorite memories, and get excited for next month\'s adventures.',
    theme_week: 'Month 1: At School',
    week: 'Week 4',
    duration: '8 min',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    materials: [
      '🎉 Celebration props (from packet)',
      '📸 Camera for memory photos',
      '🧸 Ivy Doll',
      '⭐ Achievement stickers',
      '🎵 Celebration music'
    ],
    learning_objectives: [
      'Review skills learned this month',
      'Reflect on favorite activities',
      'Celebrate growth and progress',
      'Build excitement for continued learning'
    ],
    activities: [
      {
        title: 'Skill Review Game',
        description: 'Play games using all our new school skills',
        duration: '8 minutes'
      },
      {
        title: 'Memory Sharing',
        description: 'Share favorite moments from August',
        duration: '5 minutes'
      },
      {
        title: 'Celebration Dance',
        description: 'Dance and celebrate our learning success',
        duration: '6 minutes'
      }
    ],
    color: 'bright-yellow'
  }
}

export default function LessonPage({ params }: LessonPageProps) {
  const lesson = lessons[params.slug]

  if (!lesson) {
    notFound()
  }

  const colorClasses = {
    'bright-green': {
      badge: 'bg-bright-green-100 text-bright-green-700 border-bright-green-200',
      card: 'border-bright-green-200',
      button: 'bg-bright-green-500 hover:bg-bright-green-600',
      accent: 'text-bright-green-600'
    },
    'bright-yellow': {
      badge: 'bg-bright-yellow-100 text-bright-yellow-700 border-bright-yellow-200',
      card: 'border-bright-yellow-200',
      button: 'bg-bright-yellow-500 hover:bg-bright-yellow-600',
      accent: 'text-bright-yellow-600'
    },
    'bright-pink': {
      badge: 'bg-bright-pink-100 text-bright-pink-700 border-bright-pink-200',
      card: 'border-bright-pink-200',
      button: 'bg-bright-pink-500 hover:bg-bright-pink-600',
      accent: 'text-bright-pink-600'
    },
    'bright-purple': {
      badge: 'bg-bright-purple-100 text-bright-purple-700 border-bright-purple-200',
      card: 'border-bright-purple-200',
      button: 'bg-bright-purple-500 hover:bg-bright-purple-600',
      accent: 'text-bright-purple-600'
    }
  }

  const colors = colorClasses[lesson.color as keyof typeof colorClasses]

  return (
    <div className="min-h-screen bg-gradient-to-br from-bright-green-50 via-bright-yellow-50 to-bright-pink-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="outline" asChild>
              <Link href="/course">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Course
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <Badge className={colors.badge}>
              {lesson.theme_week}
            </Badge>
            <Badge className={colors.badge}>
              {lesson.week}
            </Badge>
            <Badge variant="outline">
              <Clock className="h-3 w-3 mr-1" />
              {lesson.duration}
            </Badge>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {lesson.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl">
            {lesson.description}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Video Player */}
            <Card className={`lesson-card shadow-lg ${colors.card}`}>
              <CardHeader>
                <CardTitle className={`flex items-center gap-2 ${colors.accent}`}>
                  <Play className="h-5 w-5" />
                  Video Lesson with Mrs. Jeni
                </CardTitle>
                <CardDescription>
                  Watch along and learn together! Mrs. Jeni will guide you through today's activities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <VideoPlayer 
                  videoUrl={lesson.video_url} 
                  title={lesson.title}
                />
              </CardContent>
            </Card>

            {/* Learning Objectives */}
            <Card className="lesson-card shadow-lg">
              <CardHeader>
                <CardTitle className={colors.accent}>What We'll Learn Today</CardTitle>
                <CardDescription>
                  By the end of this lesson, your little one will be able to:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {lesson.learning_objectives.map((objective: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className={`h-5 w-5 mt-0.5 ${colors.accent} flex-shrink-0`} />
                      <span className="text-gray-700">{objective}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Activities */}
            <Card className="lesson-card shadow-lg">
              <CardHeader>
                <CardTitle className={colors.accent}>Today's Activities</CardTitle>
                <CardDescription>
                  Fun, hands-on activities to reinforce today's learning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {lesson.activities.map((activity: any, index: number) => (
                    <div key={index} className={`p-4 bg-gradient-to-r from-${lesson.color}-50 to-white rounded-lg border border-${lesson.color}-200`}>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-800">{activity.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {activity.duration}
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-sm">{activity.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Materials List */}
            <Card className="lesson-card shadow-lg">
              <CardHeader>
                <CardTitle className={`flex items-center gap-2 ${colors.accent}`}>
                  <Leaf className="h-5 w-5" />
                  Materials Needed
                </CardTitle>
                <CardDescription>
                  Gather these items before starting the lesson
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MaterialChecklist materials={lesson.materials} />
              </CardContent>
            </Card>

            {/* Download Activities */}
            <Card className="lesson-card shadow-lg">
              <CardHeader>
                <CardTitle className={`flex items-center gap-2 ${colors.accent}`}>
                  <Download className="h-5 w-5" />
                  Printable Activities
                </CardTitle>
                <CardDescription>
                  Download and print today's activity sheets
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className={`w-full text-white ${colors.button}`}>
                  <Download className="h-4 w-4 mr-2" />
                  Download Activity Sheet
                </Button>
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download Parent Guide
                </Button>
              </CardContent>
            </Card>

            {/* Lesson Info */}
            <Card className={`lesson-card shadow-lg bg-gradient-to-br from-${lesson.color}-50 to-white ${colors.card}`}>
              <CardHeader>
                <CardTitle className={`flex items-center gap-2 ${colors.accent}`}>
                  <Clock className="h-5 w-5" />
                  Lesson Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Age Range:</span>
                  <span className="font-medium">2-5 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{lesson.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Difficulty:</span>
                  <span className="font-medium">Beginner</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Materials:</span>
                  <span className="font-medium">{lesson.materials.length} items</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Activities:</span>
                  <span className="font-medium">{lesson.activities.length} activities</span>
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <Card className="lesson-card shadow-lg">
              <CardHeader>
                <CardTitle className={colors.accent}>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Having trouble with this lesson? Mrs. Jeni and our support team are here to help!
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                  <Button variant="outline" className="w-full">
                    Join Parent Community
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 