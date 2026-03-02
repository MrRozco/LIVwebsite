import type { AssessmentsPageContent } from "@/types";

export const assessmentsContent: AssessmentsPageContent = {
  eyebrow: "Assessment Library",
  title: "Choose the assessment you need",
  description:
    "Each assessment opens in a simple modal so you can complete it without losing your place. We recommend starting with the general intake if you are new.",
  steps: [
    {
      title: "Pick an assessment",
      description: "Select the form that best matches your current needs.",
    },
    {
      title: "Complete the form",
      description: "Answer the questions at your own pace in a focused modal.",
    },
    {
      title: "Receive next steps",
      description: "We review your responses and guide your personalized care plan.",
    },
  ],
  assessments: [
    {
      slug: "fm-ft-stress-assessment",
      title: "Stress Response Assessment",
      summary:
        "Identify how chronic stress shows up across your sleep, mood, digestion, and energy so we can tailor relief strategies.",
      ctaLabel: "Open Assessment",
      modalIntro:
        "Complete this stress assessment to help us understand your current load and recovery patterns.",
      form: {
        intro:
          "Stress is a normal part of life. Every day, we’re faced with stimuli, called stressors, which can elicit the body’s “fight or flight” response, setting off a cascade of physiological reactions and resulting in emotions ranging from mild to intense. But while occasional stress is natural and even healthy, chronic or acute stress can be harmful. Please take a few moments to discover your body’s response to situations you perceive as stressful. By honestly assessing how you feel, your healthcare provider can create a natural stress relief program for your individual needs.",
        responseOptions: ["Never", "Seldom true", "Sometimes true", "Often true"],
        personalInfo: {
          firstNameLabel: "First Name (Required)",
          lastNameLabel: "Last Name (Required)",
          ageLabel: "Age",
          genderLabel: "Select Gender",
          genderOptions: ["Select Gender", "Male", "Female"],
        },
        sections: [
          {
            title: "Section A",
            description: "When under stress for two weeks or longer, I...",
            questions: [
              "Get wound up when I get tired and have trouble calming down",
              "Feel driven, appear energetic but feel “burned out” and exhausted",
              "Feel restless, agitated, anxious, and uneasy",
              "Feel easily overwhelmed by emotion",
              "Feel emotional — cry easily or laugh inappropriately",
              "Experience heart palpitations or a pounding in my chest",
              "Am short of breath",
              "Am constipated",
              "Feel warm, over-heated, and dry all over",
              "Get mouth sores or sore tongue",
              "Get hot flashes",
              "Sleep less than seven hours a night",
              "Have trouble falling asleep and staying asleep",
              "Worry about high blood pressure, cholesterol, and triglycerides",
              "Forget to eat and feel little hunger",
            ],
          },
          {
            title: "Section B",
            description: "When under stress for two weeks or longer, I...",
            questions: [
              "Get wound up when I get tired and have trouble calming down",
              "Find myself worrying about things big and small",
              "Feel like I can’t stop worrying, even though I want to",
              "Feel impulsive, pent up, and ready to explode",
              "Get muscle spasms",
              "Feel aggressive, unyielding, or inflexible when pressed for time",
              "See, hear, and smell things that others do not",
              "Stay awake replaying the events of the day or planning for tomorrow",
              "Have upsetting thoughts or images enter my mind again and again",
              "Have a hard time stopping myself from doing things again and again, like checking on things or rearranging objects over and over",
              "Worry a lot about terrible things that could happen if I’m not careful",
            ],
          },
          {
            title: "Section C",
            description: "When under stress for two weeks or longer, I...",
            questions: [
              "Have muscle and joint pains",
              "Have muscle weakness",
              "Crave salt or salty things",
              "Have multiple points on my body that when touched are tender or painful",
              "Have dark circles under my eyes",
              "Feel a sudden sense of anxiety when I get hungry",
              "Use medications to manage pain",
              "Get dizzy when rising or standing up from a kneeling or sitting position",
              "Have diarrhea or bouts of nausea with or without vomiting for no apparent reason",
              "Have headaches",
            ],
          },
          {
            title: "Section D",
            description: "When under stress for two weeks or longer, I...",
            questions: [
              "Have trouble organizing my thoughts",
              "Get easily distracted and lose focus",
              "Have difficulty making decisions and mistrust my judgment",
              "Feel depressed and apathetic",
              "Lack the motivation and energy to stay on task and pay attention",
              "Am forgetful",
              "Feel unsettled, restless, and anxious",
              "Wake up tired and unrefreshed",
              "Experience heartburn and indigestion",
              "Catch colds or infections easily",
            ],
          },
          {
            title: "Section E",
            description: "When under stress for two weeks or longer, I...",
            questions: [
              "Feel tired for no apparent reason",
              "Experience lingering mild fatigue after exertion or physical activity",
              "Find it difficult to concentrate and complete tasks",
              "Feel depressed and apathetic",
              "Feel cold or chilled – hands, feet, or all over – for no apparent reason",
              "Have little or no interest in sex",
              "Sweat spontaneously during the day",
              "Feel puffy and retain fluids",
              "Sleep more than nine hours a night",
              "Have poor muscle tone",
              "Have trouble losing weigh",
              "Wake up tired even though I seem to get plenty of sleep",
              "Have no energy and feel physically weak",
              "Am susceptible to colds and the flu",
              "Feel dragged down by multiple symptoms, such as poor digestion and body aches",
            ],
          },
        ],
      },
    },
    {
      slug: "ace",
      title: "Adverse Childhood Experiences (ACE) Assessment",
      summary:
        "Understand early life experiences that may impact stress regulation, immunity, and long‑term health patterns.",
      ctaLabel: "Open Assessment",
      modalIntro:
        "This assessment helps us understand childhood experiences that may impact current health.",
      form: {
        intro:
          "This questionnaire is intended for adults (18 years or older). Please select the best response for each of the following questions, then add up the number of YES responses to determine your ACE score. Due to the personal nature of these questions, you may choose not to share your responses with your healthcare provider. Instead, you may choose to share only your final ACE score.",
        responseOptions: ["Yes", "No"],
        personalInfo: {
          firstNameLabel: "First Name (Required)",
          lastNameLabel: "Last Name (Required)",
          ageLabel: "Age",
          genderLabel: "Select Gender",
          genderOptions: ["Select Gender", "Male", "Female"],
        },
        sections: [
          {
            title: "Psychological Abuse",
            questions: [
              "Did a parent or other adult often swear at you, insult you, put you down, or humiliate you?",
              "Did a parent or other adult often act in a way that made you afraid that you might be physically hurt?",
            ],
          },
          {
            title: "Physical Abuse",
            questions: [
              "Did a parent or other adult often push, grab, slap, or throw something at you?",
              "Did a parent or other adult often hit you so hard that you had marks or were injured?",
            ],
          },
          {
            title: "Sexual Abuse",
            questions: [
              "Did an adult or a person at least 5 years older than you ever touch you inappropriately or fondle you?",
              "Did an adult or a person at least 5 years older than you ask you to touch their body in an inappropriate way?",
              "Did an adult or a person at least 5 years older than you attempt to have or actually have oral, anal, or vaginal sex with you?",
            ],
          },
          {
            title: "Substance Abuse",
            questions: [
              "Did you live with or spend a lot of time with anyone who was a problem drinker or alcoholic?",
              "Did you live with or spend a lot of time with anyone who used illicit drugs recreationally or habitually?",
            ],
          },
          {
            title: "Neglect",
            questions: [
              "Did you regularly experience a lack of access to food, clothing, shelter, or medical care when it was needed?",
              "Did you regularly experience a lack of affection, companionship, or support from your parents, household members, or primary caregivers?",
              "Were you regularly left unsupervised or minimally supervised for long periods of time?",
              "Did your parents or primary caregivers regularly express a lack of interest or concern about your whereabouts or friendships?",
              "Did you regularly experience a lack of interaction (e.g., play, bedtime reading, help with homework, etc.) with your parents or primary caregivers?",
            ],
          },
          {
            title: "Mental Illness in the Household",
            questions: [
              "Did a parent, household member, or primary caregiver have depression or another mood disorder, or any type of mental illness?",
              "Did a parent, household member, close family member, or primary caregiver attempt suicide?",
            ],
          },
          {
            title: "Parental Relationships",
            questions: [
              "Did your parents or other family members often shout, fight, or exchange physical blows with one another?",
              "Were your parents ever separated or divorced?",
              "Was your mother or stepmother sometimes or often pushed, grabbed, slapped? Did she sometimes or often have objects thrown at her?",
              "Was your mother or stepmother sometimes or often kicked, bitten, hit with a fist, or hit with something hard?",
              "Was your mother or stepmother ever hit repeatedly for several minutes?",
              "Was your mother or stepmother ever threatened with or hurt by a knife or gun?",
            ],
          },
          {
            title: "Criminal Behavior in Household",
            questions: [
              "Did a parent or household member regularly engage in illegal activities or behaviors?",
              "Did a parent or household member ever go to prison?",
            ],
          },
        ],
      },
    },
    {
      slug: "female-intake",
      title: "Comprehensive Female Health Intake",
      summary:
        "Collect essential contact, history, and current health details to guide a personalized care plan.",
      ctaLabel: "Open Assessment",
      modalIntro: "Please complete this intake to capture comprehensive female health details.",
      form: {
        mode: "fields",
        responseOptions: [],
        personalInfo: {
          firstNameLabel: "First Name",
          lastNameLabel: "Last Name",
          ageLabel: "Age",
          genderLabel: "Gender",
          genderOptions: ["Female"],
        },
        sections: [],
        fieldSections: [
          {
            title: "General Information",
            fields: [
              {
                name: "assignedTo",
                label: "Assigned to",
                type: "text",
                placeholder: "Assigned to",
              },
              {
                name: "dateOfBirth",
                label: "Date of Birth",
                type: "date",
                placeholder: "Choose Date of Birth",
              },
              {
                name: "age",
                label: "Age",
                type: "number",
                placeholder: "Age",
              },
              {
                name: "primaryAddress",
                label: "Primary Address",
                type: "text",
                placeholder: "Street Address",
              },
              {
                name: "streetAddress2",
                label: "Street 2 Address",
                type: "text",
                placeholder: "Street 2 Address",
              },
              {
                name: "city",
                label: "City",
                type: "text",
                placeholder: "City",
              },
              {
                name: "zipCode",
                label: "Zip Code",
                type: "text",
                placeholder: "Zip Code",
              },
              {
                name: "primaryPhoneCountry",
                label: "Primary Phone Number - Country Code",
                type: "text",
                placeholder: "Country Code",
              },
              {
                name: "primaryPhoneNumber",
                label: "Primary Phone Number",
                type: "tel",
                placeholder: "Phone Number",
              },
              {
                name: "phoneOther",
                label: "Phone (Other)",
                type: "tel",
                placeholder: "Phone (Other)",
              },
              {
                name: "phoneWork",
                label: "Phone (Work)",
                type: "tel",
                placeholder: "Phone (Work)",
              },
              {
                name: "geneticBackground",
                label: "Genetic Background",
                type: "text",
                placeholder: "Response",
              },
              {
                name: "lastMedicalCare",
                label: "When, where and from whom did you last receive medical or health care?",
                type: "textarea",
                placeholder: "Response",
              },
              {
                name: "emergencyContact",
                label: "Emergency Contact",
                type: "text",
                placeholder: "Response",
              },
              {
                name: "emergencyRelationship",
                label: "Relationship",
                type: "text",
                placeholder: "Response",
              },
              {
                name: "emergencyPhoneHome",
                label: "Emergency Contact's Phone (Home)",
                type: "tel",
                placeholder: "Response",
              },
              {
                name: "emergencyPhoneCell",
                label: "Emergency Contact's Phone (Cell)",
                type: "tel",
                placeholder: "Response",
              },
              {
                name: "emergencyPhoneWork",
                label: "Emergency Contact's Phone (Work)",
                type: "tel",
                placeholder: "Response",
              },
            ],
          },
          {
            title: "Current Health Concerns",
            description:
              "Please list CURRENT and ONGOING health complaints in order of priority. After each response, press Enter to add the next health complaint.",
            fields: [
              {
                name: "currentHealthConcerns",
                label: "Current Health Concerns",
                type: "textarea",
                placeholder: "List your health complaints",
              },
            ],
          },
        ],
      },
    },
  ],
};
