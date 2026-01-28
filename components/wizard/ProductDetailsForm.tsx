import { MarkdownEditor } from '@/components/ui/MarkdownEditor';
import { DraggableFeatureList } from '@/components/forms/DraggableFeatureList';
import { FileText, List, Plus, Trash2, CheckCircle, Layers, Star } from 'lucide-react';

interface ProductDetailsFormProps {
  data: any;
  onChange: (data: any) => void;
}

export function ProductDetailsForm({ data, onChange }: ProductDetailsFormProps) {
  // Convert features to have priority if not already set
  const featuresWithPriority = (data.features || []).map((f: any, index: number) => ({
    id: f.id || `temp-${index}-${Date.now()}`,
    title: f.title || '',
    description: f.description || '',
    priority: f.priority ?? (index + 1) * 10,
  }));

  const handleFeaturesChange = (newFeatures: any[]) => {
    onChange({ ...data, features: newFeatures });
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Instructions Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100 dark:border-gray-800">
          <FileText className="w-5 h-5 text-[#2563eb]" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Usage Instructions</h3>
        </div>
        
        <div className="space-y-2">
          <MarkdownEditor
            label="Detailed Instructions"
            value={data.instructions || ''}
            onChange={(value) => onChange({ ...data, instructions: value })}
            placeholder="Enter step-by-step installation and usage instructions..."
            minHeight="min-h-[300px]"
          />
          <p className="text-xs text-gray-500">
            Provide clear steps for users to get started with your product. Markdown is supported.
          </p>
        </div>
      </div>

      {/* Features Section - Using Draggable List */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100 dark:border-gray-800">
          <List className="w-5 h-5 text-[#2563eb]" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Key Features</h3>
          {featuresWithPriority.length > 0 && (
            <span className="px-2 py-0.5 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
              {featuresWithPriority.length}
            </span>
          )}
        </div>

        <DraggableFeatureList
          features={featuresWithPriority}
          onChange={handleFeaturesChange}
        />
      </div>
      {/* Health Metrics Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#10B981]" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Health Metrics</h3>
          </div>
          <button
            type="button"
            onClick={() => {
              const newHealth = [...(data.health || []), { label: '', value: '', percentage: 0, color: 'bg-blue-500' }];
              onChange({ ...data, health: newHealth });
            }}
            className="text-sm text-[#2563eb] font-medium hover:underline flex items-center gap-1"
          >
            <Plus className="w-4 h-4" />
            Add Metric
          </button>
        </div>

        <div className="space-y-4">
          {(data.health || []).map((metric: any, index: number) => (
            <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 relative group">
              <button
                onClick={() => {
                  const newHealth = [...(data.health || [])];
                  newHealth.splice(index, 1);
                  onChange({ ...data, health: newHealth });
                }}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-500 uppercase">Label</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
                    placeholder="e.g. Uptime"
                    value={metric.label}
                    onChange={(e) => {
                      const newHealth = [...(data.health || [])];
                      newHealth[index] = { ...newHealth[index], label: e.target.value };
                      onChange({ ...data, health: newHealth });
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-500 uppercase">Value</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
                    placeholder="e.g. 99.9%"
                    value={metric.value}
                    onChange={(e) => {
                      const newHealth = [...(data.health || [])];
                      newHealth[index] = { ...newHealth[index], value: e.target.value };
                      onChange({ ...data, health: newHealth });
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-500 uppercase">Percentage (0-100)</label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
                    placeholder="99"
                    value={metric.percentage}
                    onChange={(e) => {
                      const newHealth = [...(data.health || [])];
                      newHealth[index] = { ...newHealth[index], percentage: e.target.value };
                      onChange({ ...data, health: newHealth });
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Assets Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#2563eb]" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Product Assets</h3>
          </div>
          <button
            type="button"
            onClick={() => {
              const newAssets = [...(data.assets || []), { title: '', type: 'pdf', href: '', subtitle: '' }];
              onChange({ ...data, assets: newAssets });
            }}
            className="text-sm text-[#2563eb] font-medium hover:underline flex items-center gap-1"
          >
            <Plus className="w-4 h-4" />
            Add Asset
          </button>
        </div>

        <div className="space-y-4">
          {(data.assets || []).map((asset: any, index: number) => (
            <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 relative group">
              <button
                onClick={() => {
                  const newAssets = [...(data.assets || [])];
                  newAssets.splice(index, 1);
                  onChange({ ...data, assets: newAssets });
                }}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-500 uppercase">Asset Title</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
                    placeholder="e.g. User Manual"
                    value={asset.title}
                    onChange={(e) => {
                      const newAssets = [...(data.assets || [])];
                      newAssets[index] = { ...newAssets[index], title: e.target.value };
                      onChange({ ...data, assets: newAssets });
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-500 uppercase">Type</label>
                  <select
                    className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
                    value={asset.type}
                    onChange={(e) => {
                      const newAssets = [...(data.assets || [])];
                      newAssets[index] = { ...newAssets[index], type: e.target.value };
                      onChange({ ...data, assets: newAssets });
                    }}
                  >
                    <option value="pdf">PDF Document</option>
                    <option value="video">Video</option>
                    <option value="slides">Slides</option>
                    <option value="link">External Link</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-medium text-gray-500 uppercase">URL / Link</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
                    placeholder="https://..."
                    value={asset.href}
                    onChange={(e) => {
                      const newAssets = [...(data.assets || [])];
                      newAssets[index] = { ...newAssets[index], href: e.target.value };
                      onChange({ ...data, assets: newAssets });
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Architecture Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100 dark:border-gray-800">
          <Layers className="w-5 h-5 text-[#2563eb]" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Technical Architecture</h3>
        </div>
        
        <div className="space-y-2">
          <MarkdownEditor
            label="Architecture Details"
            value={data.technicalArchitecture || ''}
            onChange={(value) => onChange({ ...data, technicalArchitecture: value })}
            placeholder="Describe the technical stack and architecture (e.g. database, backend, frontend, hosting)..."
            minHeight="min-h-[200px]"
          />
          <p className="text-xs text-gray-500">
            This section will be displayed on the public product page. Use markdown to format.
          </p>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-[#F59E0B]" />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Customer Reviews</h3>
          </div>
          <button
            type="button"
            onClick={() => {
              const newReviews = [...(data.reviews || []), { authorName: '', authorRole: '', authorAvatar: '', rating: 5, content: '' }];
              onChange({ ...data, reviews: newReviews });
            }}
            className="text-sm text-[#2563eb] font-medium hover:underline flex items-center gap-1"
          >
            <Plus className="w-4 h-4" />
            Add Review
          </button>
        </div>

        <div className="space-y-4">
          {(data.reviews || []).map((review: any, index: number) => (
            <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 relative group">
              <button
                onClick={() => {
                  const newReviews = [...(data.reviews || [])];
                  newReviews.splice(index, 1);
                  onChange({ ...data, reviews: newReviews });
                }}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-500 uppercase">Author Name *</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
                    placeholder="e.g. John Smith"
                    value={review.authorName}
                    onChange={(e) => {
                      const newReviews = [...(data.reviews || [])];
                      newReviews[index] = { ...newReviews[index], authorName: e.target.value };
                      onChange({ ...data, reviews: newReviews });
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-500 uppercase">Role / Position</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
                    placeholder="e.g. CTO, Tech Corp"
                    value={review.authorRole || ''}
                    onChange={(e) => {
                      const newReviews = [...(data.reviews || [])];
                      newReviews[index] = { ...newReviews[index], authorRole: e.target.value };
                      onChange({ ...data, reviews: newReviews });
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-500 uppercase">Avatar URL</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
                    placeholder="https://example.com/avatar.jpg"
                    value={review.authorAvatar || ''}
                    onChange={(e) => {
                      const newReviews = [...(data.reviews || [])];
                      newReviews[index] = { ...newReviews[index], authorAvatar: e.target.value };
                      onChange({ ...data, reviews: newReviews });
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-500 uppercase">Rating (1-5)</label>
                  <select
                    className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb]"
                    value={review.rating || 5}
                    onChange={(e) => {
                      const newReviews = [...(data.reviews || [])];
                      newReviews[index] = { ...newReviews[index], rating: parseInt(e.target.value) };
                      onChange({ ...data, reviews: newReviews });
                    }}
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5 stars)</option>
                    <option value={4}>⭐⭐⭐⭐ (4 stars)</option>
                    <option value={3}>⭐⭐⭐ (3 stars)</option>
                    <option value={2}>⭐⭐ (2 stars)</option>
                    <option value={1}>⭐ (1 star)</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-medium text-gray-500 uppercase">Review Content *</label>
                  <textarea
                    className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] min-h-[100px]"
                    placeholder="What the customer said about the product..."
                    value={review.content || ''}
                    onChange={(e) => {
                      const newReviews = [...(data.reviews || [])];
                      newReviews[index] = { ...newReviews[index], content: e.target.value };
                      onChange({ ...data, reviews: newReviews });
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
          
          {(!data.reviews || data.reviews.length === 0) && (
            <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg">
              No reviews added yet. Click "Add Review" to add customer testimonials.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
