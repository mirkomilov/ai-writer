import ContentCreateForm from '@/components/dashboard/content-creat-form';
import ContentViewer from '@/components/dashboard/content-viewer';
import { useAppContext } from '@/contexts/app.context';
import { ContentCreatRequestParam } from '@/shared/types/content-creat-request-param';
import { generateArticle } from '@/utils/openai';
import { useState } from 'react';

export default function DashboardHome() {
  const { setGeneratingContent, generatingContent } = useAppContext();
  const [content, setContent] = useState<string | null>(null);

  const handleSubmit = async (params: ContentCreatRequestParam) => {
    setGeneratingContent(true);
    const { title, description } = params;
    const result = await generateArticle(title, description);
    setContent(result);
    setGeneratingContent(false);
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold">Article Writer</h1>
      {content ? (
        <ContentViewer content={content} />
      ) : (
        <ContentCreateForm
          isLoading={generatingContent}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
