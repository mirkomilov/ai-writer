import OpenAI from 'openai';

let openAI: OpenAI;

export const generateArticle = async (title: string, description: string) => {
  if (!openAI) {
    openAI = new OpenAI({
      apiKey: import.meta.env.VITE_OPEN_AI_KEY,
      dangerouslyAllowBrowser: true,
    });
  }
  const result = await openAI.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: `You are helpful assistant designed to assist users in creating engaging content,such as blogs,articles,or any written material.`,
      },
      {
        role: 'user',
        content: `Please create an article based on the following information. Here is the list of information:
        \ntitle: ${title}
        \ndescription: ${description}
        \nRemember the post should be based on the information that I have mentioned above. Output should be Markdown text format strictly.`,
      },
    ],
  });
  return result.choices[0].message.content;
};
