import { CreateModelWizard } from "@/components/models/CreateModelWizard";

export default function CreateModelPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-sans font-bold mb-2">Create AI Influencer</h1>
        <p className="text-on-surface-variant">Configure your new AI persona. Generation takes about 30-60 seconds.</p>
      </div>
      <CreateModelWizard />
    </div>
  );
}
