import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { designStyles } from "@/data/designStyles";
import { buildSrcDoc } from "@/components/showcase/StyleExampleFrame";
import { useMemo } from "react";

export default function StyleExample() {
  const { styleId } = useParams<{ styleId: string }>();
  const style = designStyles.find(s => s.id === styleId);

  const srcDoc = useMemo(() => {
    if (!style) return "";
    return buildSrcDoc(style.sampleCSS, style.name);
  }, [style]);

  if (!style) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Estilo não encontrado</h1>
          <Link to="/showcase" className="text-primary hover:underline">← Voltar ao Showcase</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative">
      {/* Floating back button */}
      <Link
        to="/showcase"
        className="fixed top-3 left-3 z-50 p-2 rounded-lg bg-background/90 backdrop-blur-sm border border-border/50 hover:bg-muted/50 transition-colors shadow-lg"
      >
        <ArrowLeft size={18} />
      </Link>

      {/* Style name badge */}
      <div className="fixed top-3 right-3 z-50 px-3 py-1.5 rounded-lg bg-background/90 backdrop-blur-sm border border-border/50 text-xs font-medium shadow-lg">
        {style.name}
      </div>

      {/* Full-page iframe */}
      <iframe
        srcDoc={srcDoc}
        title={`Exemplo: ${style.name}`}
        className="w-full h-screen border-none"
        sandbox="allow-same-origin"
      />
    </div>
  );
}
