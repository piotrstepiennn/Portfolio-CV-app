import { IImageProps, Image, ImageFit } from "@fluentui/react/lib/Image";

const imageProps: Partial<IImageProps> = {
  imageFit: ImageFit.centerCover,
  width: 50,
  height: 50,
  // Show a border around the image (just for demonstration purposes)
  styles: (props) => ({
    root: { border: "1px solid " + props.theme.palette.neutralSecondary },
  }),
};

const Taskbar = () => {
  return (
    <div>
      <Image {...imageProps} src="./assets/wallpaper.jpg" alt="Wallpaper" />
    </div>
  );
};

export default Taskbar;
