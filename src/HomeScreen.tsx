import * as RX from 'reactxp'

import { VideoThumbnail } from './VideoThumbnail';
import { data } from './Data';

interface HomeScreenProps {
  onPressVideo: (video: Video) => void;
}

interface Video {
  id: number,
  name: string,
  previewImage: string,
  videoUrl: string,
}

const styles = {
  scroll: RX.Styles.createScrollViewStyle({
    alignSelf: 'stretch',
    backgroundColor: '#f5fcff',
  }),
  videoList: RX.Styles.createViewStyle({
    flexDirection: 'row',
    overflowX: 'auto',
  }),
}

export class HomeScreen extends RX.Component<MainPanelProps, null> {
  private _translationValue: RX.Animated.Value;
  private _animatedStyle: RX.Types.AnimatedTextStyleRuleSet;

  constructor() {
    super();

    this._translationValue = new RX.Animated.Value(-100);
    this._animatedStyle = RX.Styles.createAnimatedTextStyle({
      transform: [
      {
        translateY: this._translationValue
      }
      ]
    });
  }

  render() {
    return (
      <RX.ScrollView style={styles.scroll} horizontal={true}>
        <RX.View style={styles.videoList}>
          {this.renderVideoPreview()}
        </RX.View>
      </RX.ScrollView>
    );
  }

  private renderVideoPreview() {
    const { onPressVideo } = this.props

    return data.map(video =>
      <VideoThumbnail
        key={video.id}
        video={video}
        onPressVideo={onPressVideo}
      />
    )
  }
}
