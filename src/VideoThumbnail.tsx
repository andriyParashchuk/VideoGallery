import * as RX from 'reactxp'

interface VideoThumbnailProps {
  video: Video,
  onPressVideo: (video: Video) => void;
}

interface Video {
  id: number,
  name: string,
  previewImage: string,
  videoUrl: string,
}

const styles = {
  videoPreview: RX.Styles.createViewStyle({
    margin: 15,
    borderRadius: 8,
    overflow: 'hidden',
    width: 386,
  }),
  videoThumbnail: RX.Styles.createImageStyle({
    height: 218,
  }),
  videoDescription: RX.Styles.createViewStyle({
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'relative',
    paddingHorizontal: 8,
    paddingVertical: 12,
    overflow: 'visible',
    color: '#fff',
  }),
  videoName: RX.Styles.createTextStyle({
    overflow: 'hidden',
    height: 60,
    fontSize: 26,
    lineHeight: 30,
  })
}

export class VideoThumbnail extends RX.Component<VideoThumbnailProps> {
  render() {
    const { video } = this.props

    return (
      <RX.View key={video.id} onPress={this._onPressVideo} style={styles.videoPreview}>
        <RX.Image source={video.previewImage} resizeMode="cover" style={styles.videoThumbnail}/>
        <RX.View style={styles.videoDescription}>
          <RX.Text style={styles.videoName}>{video.name}</RX.Text>
        </RX.View>
      </RX.View>
    );
  }

  private _onPressVideo = () => {
    const { onPressVideo, video} = this.props

    onPressVideo(video)
  }
}
