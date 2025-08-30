import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

export default function Home() {
  const router = useRouter();
  const [roomId, setRoomId] = useState("");

  const createAndJoin = () => {
    const roomId = uuidv4();
    router.push(`${roomId}`);
  };

  const joinRoom = () => {
    if (roomId) router.push(`/${roomId}`);
    else {
      alert("Please provide a valid room id");
    }
  };

  return (
    <div className="h-screen">
      <div className="flex items-center justify-center h-full">
        <Card className="flex w-96 items-center flex-col">
          <CardHeader>
            Create or Join room
          </CardHeader>
          <CardContent className="">
            <Input
              type="text"
              placeholder="Enter Room Id"
              value={roomId}
              onChange={(e) => setRoomId(e?.target?.value)}
              className="mb-6 w-80"
            />
            <div className="flex justify-center">
              <Button
                onClick={() => {
                  if (roomId) {
                    toast.success("Joined room");
                    joinRoom();
                  } else {
                    toast.error("Please provide a valid room id");
                  }
                }}
              >
                Join Room
              </Button>
            </div>

            <Separator className="my-6" />

            <div className="flex justify-center">
              <Button
                onClick={() => {
                  toast.success("Created room");
                  createAndJoin();
                }}
              >
                Create Room
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
