import * as RX from 'reactxp'
import { default as RXVideo } from 'reactxp-video'

interface PlaybackScreenProps {
  video: Video,
  onPressBack: () => void
}

interface Video {
  id: number,
  name: string,
  previewImage: string,
  videoUrl: string,
}

const styles = {
  playbackWrapper: RX.Styles.createViewStyle({
    flex: 1,
  }),
  backButton: RX.Styles.createViewStyle({
    top: 0,
    left: 0,
    right: 0,
    padding: 10,
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignItems: 'center',
    color: '#fff',
  }),
}

export class PlaybackScreen extends RX.Component<SecondPanelProps> {
  render() {
    const { video, onPressBack } = this.props

    return (
      <RX.View style={styles.playbackWrapper}>
        <RXVideo
          source={video.videoUrl}
          showControls={true}
          resizeMode="contain"
        />
        <RX.View
          style={styles.backButton}
          onPress={onPressBack}
        >
          {video.name}
        </RX.View>
      </RX.View>
    )
  }
}
