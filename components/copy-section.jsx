
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Copy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const CopySection = (props) => {
    const { roomId } = props;

    const [copied, setCopied] = useState(false);

    return (
        <Card className="absolute left-[30px] bottom-[100px] w-fit bg-card text-card-foreground border border-border rounded-lg shadow-lg p-4 flex flex-col gap-2">
            <div className="text-base font-semibold mb-1">Copy Room ID:</div>
            <hr className="my-1 border-border" />
            <div className="flex items-center text-sm">
                <span className="font-mono select-all px-1 py-0.5 rounded-lg bg-muted text-foreground">{roomId}</span>
                <CopyToClipboard
                    text={roomId}
                    onCopy={() => {
                        setCopied(true);
                        setTimeout(() => setCopied(false), 1500);
                    }}
                >
                    <Button size="icon" variant="ghost" className="ml-2" aria-label="Copy Room ID">
                        {copied ? (
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        ) : (
                            <Copy className="w-5 h-5" />
                        )}
                    </Button>
                </CopyToClipboard>
                {copied && (
                    <span className="ml-2 text-green-600 text-xs font-medium">Copied!</span>
                )}
            </div>
        </Card>
    );
};

export default CopySection;