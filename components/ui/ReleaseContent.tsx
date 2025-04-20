'use client'
import { useState, useEffect, useTransition } from "react";
import markdownToHtml from "../../lib/markdownToHtml"

export default function ReleaseContent({ content }: { content: string }) {
    const [htmlContent, setHtmlContent] = useState('');
    const [isPending, startTransition] = useTransition();
  
    useEffect(() => {
      startTransition(async () => {
        const html = await markdownToHtml(content || "");
        setHtmlContent(html);
      });
    }, [content]);
  
    if (isPending) {
      return <div>Loading...</div>;
    }
  
    return <div className="prose-sm md:prose !p-0">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  }