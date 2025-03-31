import { Loader2, Pencil } from 'lucide-react';
import PromptHistory from './prompt-history';
import { TPromptHistory } from '@/shared/types/prompt-history.type';
import { useAppContext } from '@/contexts/app.context';

const mockItems: TPromptHistory[] = [
  {
    date: 'Today',
    links: [
      {
        title: 'Prompt 1',
        url: '/dashboard/prompt/1',
      },
      {
        title: 'Prompt 2',
        url: '/dashboard/prompt/1',
      },
    ],
  },
  {
    date: 'Yesterday',
    links: [
      {
        title: 'Prompt 1',
        url: '/dashboard/prompt/1',
      },
      {
        title: 'Prompt 2',
        url: '/dashboard/prompt/1',
      },
    ],
  },
];

export default function Sidebar() {
  const { generatingContent } = useAppContext();
  return (
    <nav className="h-screen w-80 border-r p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">AI Writer</h1>
        {generatingContent ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <button>
            <Pencil size={24} />
          </button>
        )}
      </div>
      <PromptHistory items={mockItems} />
    </nav>
  );
}
