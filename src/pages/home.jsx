/* eslint-disable react/jsx-no-target-blank */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const SIZES = [100, 200, 300, 400];
const QUALITY = [20, 40, 60, 80, 100];
const SHARPEN = [50, 100, 200, 500, 1000];
const BLUR = [2, 4, 6, 8, 16];
const ROTATE = [90, 180, 270];
const MODES = ['cover', 'contain', 'fill', 'inside', 'outside'];
const FORMAT = ['png', 'jpeg', 'webp', 'avif', 'heif'];

function Home() {
  const [params] = useSearchParams();
  const image = params.get('image');

  if (!image) {
    return <p>Please set `image` param in query string, and refresh this page</p>;
  }

  return (
    <div>
      <h3>Formats</h3>
      <div className="images">
        {FORMAT.map((x) => (
          <div key={`format-${x}`} className="image">
            <p>
              <a href={`${image}?imageFilter=resize&w=300&f=${x}`} target="_blank">
                width=300, format={x}
              </a>
            </p>
            <img src={`${image}?imageFilter=resize&w=300&f=${x}`} alt="" />
          </div>
        ))}
      </div>
      <h3>Resize + Quality</h3>
      <div className="images">
        {QUALITY.map((x) => (
          <div key={`quality-${x}`} className="image">
            <p>
              <a href={`${image}?imageFilter=resize&w=300&q=${x}`} target="_blank">
                width=300, quality={x}
              </a>
            </p>
            <img src={`${image}?imageFilter=resize&w=300&q=${x}`} alt="" />
          </div>
        ))}
      </div>
      <h3>Resize + Sharpen</h3>
      <div className="images">
        {SHARPEN.map((x) => (
          <div key={`sharpen-${x}`} className="image">
            <p>
              <a href={`${image}?imageFilter=resize&w=300&s=${x}`} target="_blank">
                width=300, sharpen={x}
              </a>
            </p>
            <img src={`${image}?imageFilter=resize&w=300&s=${x}`} alt="" />
          </div>
        ))}
      </div>
      <h3>Resize Width</h3>
      <div className="images">
        {SIZES.map((x) => (
          <div key={`resize-w-${x}`} className="image">
            <p>
              <a href={`${image}?imageFilter=resize&w=${x}`} target="_blank">
                width={x}
              </a>
            </p>
            <img src={`${image}?imageFilter=resize&w=${x}`} alt="" />
          </div>
        ))}
      </div>
      <h3>Resize Height</h3>
      <div className="images">
        {SIZES.map((x) => (
          <div key={`resize-h-${x}`} className="image">
            <p>
              <a href={`${image}?imageFilter=resize&h=${x}`} target="_blank">
                height={x}
              </a>
            </p>
            <img src={`${image}?imageFilter=resize&h=${x}`} alt="" />
          </div>
        ))}
      </div>
      <h3>Resize Both</h3>
      <div className="images">
        {SIZES.map((x) =>
          SIZES.map((y) => (
            <div key={`resize-b-${x}-${y}`} className="image">
              <p>
                <a href={`${image}?imageFilter=resize&w=${x}&h=${y}`} target="_blank">
                  width={x}, height={y}
                </a>
              </p>
              <img src={`${image}?imageFilter=resize&w=${x}&h=${y}`} alt="" />
            </div>
          ))
        )}
      </div>
      <h3>Resize Modes</h3>
      <div className="images">
        {MODES.map((x) => (
          <div key={`resize-m-${x}`} className="image">
            <p>
              <a href={`${image}?imageFilter=resize&w=300&h=300&m=${x}`} target="_blank">
                width=300, height=300, mode={x}
              </a>
            </p>
            <img src={`${image}?imageFilter=resize&w=300&h=300&m=${x}`} alt="" />
          </div>
        ))}
      </div>
      <h3>Resize + Rotate</h3>
      <div className="images">
        {ROTATE.map((x) => (
          <div key={`resize-r-${x}`} className="image">
            <p>
              <a href={`${image}?imageFilter=resize&w=200&r=${x}`} target="_blank">
                width=200, rotate={x}
              </a>
            </p>
            <img src={`${image}?imageFilter=resize&w=200&r=${x}`} alt="" />
          </div>
        ))}
      </div>
      <h3>Resize + Blur</h3>
      <div className="images">
        {BLUR.map((x) => (
          <div key={`blur-${x}`} className="image">
            <p>
              <a href={`${image}?imageFilter=resize&w=300&b=${x}`} target="_blank">
                width=300, blur={x}
              </a>
            </p>
            <img src={`${image}?imageFilter=resize&w=300&b=${x}`} alt="" />
          </div>
        ))}
      </div>
      <h3>Resize + Grayscale</h3>
      <div className="images">
        <div className="image">
          <p>
            <a href={`${image}?imageFilter=resize&w=300&g=1`} target="_blank">
              width=300, grayscale=1
            </a>
          </p>
          <img src={`${image}?imageFilter=resize&w=300&g=1`} alt="" />
        </div>
      </div>
      <h3>Resize + Negative</h3>
      <div className="images">
        <div className="image">
          <p>
            <a href={`${image}?imageFilter=resize&w=300&n=1`} target="_blank">
              width=300, negate=1
            </a>
          </p>
          <img src={`${image}?imageFilter=resize&w=300&n=1`} alt="" />
        </div>
      </div>
      <h3>Crop Both</h3>
      <div className="images">
        {SIZES.map((x) =>
          SIZES.map((y) => (
            <div key={`crop-b-${x}-${y}`} className="image">
              <p>
                <a href={`${image}?imageFilter=crop&w=${x}&h=${y}`} target="_blank">
                  width={x}, height={y}
                </a>
              </p>
              <img src={`${image}?imageFilter=crop&w=${x}&h=${y}`} alt="" />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
