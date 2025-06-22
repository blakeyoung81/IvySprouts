import { Brain, Heart, Mic, Music, Palette, Pen, Smile, Star, BookOpen, Scissors } from 'lucide-react';

export const augustCurriculum = {
  month: 'August',
  theme: 'All About My Feelings',
  parentNote: {
    title: 'A Note to Parents: Learning Through Conscious Discipline',
    content: "Welcome to a new month of learning! This August, we are focusing on a crucial aspect of your child's development: emotional intelligence. We will be using techniques from Conscious Discipline®, a renowned social-emotional learning framework. A key principle of this approach is that a child must be in a regulated, 'Executive State' to be able to learn and access higher-order thinking skills. That's why we will start each day with activities designed to help your child feel safe, connected, and emotionally regulated. By building this foundation first, we pave the way for a joyful and effective learning experience.",
  },
  weeks: [
    {
      weekNumber: 1,
      theme: 'School and Emotions (Conscious Discipline Integration)',
      focus: {
        socialEmotional: 'Safe Place introduction, identifying feelings',
        literacy: 'Read-alouds on school feelings (e.g., The Kissing Hand)',
        wowWord: 'Emotions',
        oralLanguage: 'Expressing how I feel',
        phonologicalAwareness: 'Rhyming words',
        math: 'Counting classmates, making patterns with emotion faces',
        stem: 'Exploring how the brain helps us feel',
      },
      days: [
        {
          dayNumber: 1,
          lessons: [
            {
              id: 'aug-w1-d1-v1',
              slug: 'august-morning-routine-day-1',
              title: 'Morning Routine',
              icon: Heart,
              color: 'pink',
              description: 'Start the day with our calming morning routine to get our brains and bodies ready to learn.',
              outro: "Okay, little Sprouts! We took care of our hearts, we used our kind words and calm bodies, and now our minds are ready to grow. You're blooming into brilliant thinkers—one choice at a time. I'll see you in the next video! Keep growing, glowing and knowing you are loved!",
              content: [
                { type: 'ritual', title: 'Safe Keeper Ritual', details: "“Hi friends! It's time to put your picture in our Safekeeper Heart. Even though I'm not in your house, I'm still thinking about you and keeping you in my heart. When you put your picture in, say, 'I'm safe and I help keep it safe.' Ready? Do it with me now!" },
                { type: 'activity', title: 'Xylophone Attention Activity', details: "Play three soft xylophone chimes: "Ding... ding... ding... Eyes are looking, ears are listening..." (As I hit the color then that color can show up behind me on the screen behind me)." },
                { type: 'greeting', title: 'Good Morning Greeting', details: '"Good morning friends, eyes are looking, ears are listening, hands in your lap, criss-cross applesauce." (Show ways to sit on the screen behind me). "Yay! We are now ready to learn!"' },
                { type: 'breathing', title: 'STAR Breath', details: "Let's do the STAR breath together. S-Smile, T-Take a deep breath, A-And, R-Relax." },
                { type: 'ritual', title: 'Wish Them Well Ritual', details: ""Let's pause and think of our friends who might not be feeling great today. Or if there is anyone that needs extra positive thoughts. Also, I am wishing you well. Put your hand on your heart and say, 'We wish you well.' 💛"" },
                { type: 'ritual', title: 'I Love You Ritual', details: 'Sing: 🎵 "Twinkle, Twinkle, Little Star, what a wonderful child you are. Kind bright eyes and nice round cheeks, a talented person from head to feet! Twinkle Twinkle little star what a wonderful child you are." (Words can appear on screen with a star lighting up as I point.)' },
                { type: 'celebration', title: 'Celebration Song', details: '🎶 "I did my best and I feel great—Let's celebrate, let's celebrate!" (Clap 3 times, big smile!)' },
                { type: 'movement', title: 'Movement/Dance Activity', details: 'Dance to "Shake Your Sillies Out" – include emotion faces (happy, sad, surprised, etc.) during the dance!' },
                { type: 'literacy', title: 'Letter of the Day: S', details: "'This is S. It says /s/ like in smile! Can you slither like a snake? /s/ /s/ /s/"' },
                { type: 'vocabulary', title: 'WOW Word of the Day: Emotions', details: "'Emotions are the feelings we have inside. Can you show me a happy face? A sad face?'" },
              ]
            },
            {
              id: 'aug-w1-d1-v2',
              slug: 'august-literacy-phonics-day-1',
              title: 'Literacy and Phonics',
              icon: BookOpen,
              color: 'blue',
              description: 'Read a story about school feelings and play a fun rhyming game.',
              outro: "Great job with our story and rhymes today, Sprouts! Keep growing, glowing and knowing you are loved!",
              content: [
                { type: 'read-aloud', title: 'Read-Aloud: The Kissing Hand', details: "📖 Today, we're reading a book by Audrey Penn about a raccoon who feels a little nervous about starting school—just like some of us! Let's see how his mommy helps him feel safe. (Use expressive reading, pause to show illustrations, and ask questions like: "How do you think Chester is feeling?" "What helps him feel better?")" },
                { type: 'song', title: 'Literacy Song: Emotion Version', details: '🎶 "If You're Happy and You Know It" with different feelings: "If you're sad and you know it, wipe your tears...", "If you're angry and you know it, stomp your feet...", "If you're happy and you know it, clap your hands..."' },
                { type: 'language', title: 'Oral Language Practice', details: ""Let's take turns! I'll say a feeling word, and you show me your face and tell me when you've felt that way." (Happy, Sad, Excited, Nervous). "Now it's your turn. Tell me, how are YOU feeling today? Say: I feel..."" },
                { type: 'phonics', title: 'Phonological Awareness – Rhyming Game', details: ""Let's play a rhyming game with the letter S! I'll say a word and you say a word that rhymes." (Sat – cat, Sad – mad, Sock – rock). Use visuals and puppets to make it interactive." },
              ]
            },
            {
              id: 'aug-w1-d1-v3',
              slug: 'august-stem-day-1',
              title: 'STEM & Math',
              icon: Brain,
              color: 'purple',
              description: 'Explore how our brains help us feel and practice counting with emotion faces.',
              outro: "Wow, our brains are so powerful! You did amazing work today. Keep growing, glowing and knowing you are loved!",
              content: [
                { type: 'science', title: 'Brain Science Exploration', details: ""Today, we're going to learn about something SUPER important—your brain! Your brain helps you think, learn, and even feel emotions! Show a kid-friendly diagram of the brain. "This is your amygdala—it helps us feel big feelings. And here's your prefrontal cortex—it helps you calm down and solve problems!"" },
                { type: 'demonstration', title: 'Puppet Demonstration', details: "Use puppets or emotion cards: "This puppet is feeling upset... what can help him calm down? That's right—deep breaths! That helps your brain calm too."" },
                { type: 'math', title: 'Math Integration – Counting Faces', details: ""Let's count how many friends are in our class heart today!" Show Ivy Sprout dolls with numbers (1-10) and count slowly. "One, two, three... ten! We have ten hearts in our class today!"" },
                { type: 'math', title: 'Pattern Activity', details: ""Let's make a feelings pattern. Happy face, sad face, happy face... what comes next?" (Show cards with faces to make a pattern)." },
                { type: 'demonstration', title: 'Hands-On Demo – Brain in Action!', details: 'Use a sponge and rubber ball to represent a "squishy brain" (full of feelings) and "bouncy thinking" (calm brain). "When our brain is calm, it can bounce ideas around. Let's squeeze our sponge and say, I breathe and calm my brain."' },
              ]
            },
            {
              id: 'aug-w1-d1-v4',
              slug: 'august-arts-crafts-day-1',
              title: 'Arts and Crafts',
              icon: Palette,
              color: 'green',
              description: 'Create your own "Feeling Face" Mirror to help you identify and share your emotions.',
              outro: "What a beautiful Feeling Face Mirror! You are a wonderful artist. Keep growing, glowing and knowing you are loved!",
              content: [
                { type: 'introduction', title: 'Craft: My "Feeling Face" Mirror', details: ""Today we're making something really special—your very own Feeling Face Mirror! It helps you check in with your feelings each day and share how you feel."" },
                { type: 'materials', title: 'Materials Needed', details: ['A paper plate or cardboard circle', 'A small square of foil (or reflective paper)', 'Crayons or markers', 'Glue stick or tape', 'Emotion face cutouts or draw-your-own faces (happy, sad, angry, surprised)', 'Optional: a popsicle stick for a handle'] },
                { type: 'instructions', title: 'Step-by-Step Instructions', details: ["Glue your foil piece in the center of the plate to make a 'mirror'.", "Around the edge, draw or glue emotion faces.", "Add a handle (optional).", "Write your name at the top: '(Name)'s Feeling Mirror!'"] },
                { type: 'practice', title: 'Talk & Practice', details: ""Now hold it up and say, 'How am I feeling today?' Look at yourself and choose a face that matches your feeling. You can use this every morning before school starts!"" },
                { type: 'celebration', title: 'Celebrate Your Creation!', details: "🎉 "You did it! You made your own Feeling Face Mirror! Let's blow a celebration kiss 💋!"" },
              ]
            }
          ]
        }
      ]
    }
  ]
}; 