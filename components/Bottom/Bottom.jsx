import cx from "classnames";
import { Mic, Video, PhoneOff, MicOff, VideoOff } from "lucide-react";
import { Button } from "../ui/button";

const iconBase =
  "p-4 rounded-full text-white cursor-pointer transition-colors duration-150 border-2 border-border shadow-lg shadow-border";
const iconActive = "bg-buttonPrimary";
const iconHover = "hover:bg-buttonPrimary";

const Bottom = (props) => {
  const { muted, playing, toggleAudio, toggleVideo, leaveRoom } = props;

  return (
    <div className="absolute flex justify-between bottom-5 left-0 right-0 mx-auto border border-border p-2 rounded-lg" style={{ width: 300 }}>
      {muted ? (
        <MicOff
          className={cx(iconBase, iconActive, iconHover)}
          size={55}
          onClick={toggleAudio}
        />
      ) : (
        <Mic
          className={cx(iconBase, iconHover)}
          size={55}
          onClick={toggleAudio}
        />
      )}
      {playing ? (
        <Video
          className={cx(iconBase, iconHover)}
          size={55}
          onClick={toggleVideo}
        />
      ) : (
        <VideoOff
          className={cx(iconBase, iconActive, iconHover)}
          size={55}
          onClick={toggleVideo}
        />
      )}
      <PhoneOff
        size={55}
        className={cx(iconBase, iconHover)}
        onClick={leaveRoom}
      />
    </div>
  );
};

export default Bottom;