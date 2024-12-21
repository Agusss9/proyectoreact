// src/components/Welcome.jsx
import React from 'react';

const Welcome = () => {
    const logoUrl = 'https://lh3.googleusercontent.com/fife/ALs6j_F9ZBSRrq9L6_pcUMDksKbjm9uJHgC0gNVzqPg2iqT9apbTvI1YicciwpaummyWGkSnYzCeNg8RHBKNBulAT3KxZQqLCxjBw4X9X6zGvwo6XM2sV7aqkjDPZX8bTiaxRrgVsWjIHolFQCktHkfJFrNxsEi7TbJS3B7K9btS6rbmSB92KWX7cgd_Zo1W92x1AfxkHcTqj6ydreeOO4TN1yKh6IVf4t2Fk_9Tnk4qDf14wxVMi4vqa5GDDp38ez4gUdKZYQ_HVVh8Iy58znyfl_XbQkhUaGg7_S67UtbduH67h8k67rn4AvbCsHCj6M4FsIjSitTwhAiFxDPJn5yOQ6s5THULFCllvl7CMkV-GqkENcFvRERf5DTbZopRM1BGGtGyzmdIT3lmEwpxU_Tt_yv9w8jn_hZQtuT_cbFnV4mEIgO5pY_W-RXJDxGwY_Ori5uJxJqVDc23uLgiLhLjnEvSo1kcmAu-8IBBeorArpNCB61QFPS6sxgXXka77e6lRcyzCDK01SbXGgx4oKlqZeCY0jDQNxcuP9Va2hsPH-6DlORFCKLWpUSGv5-uw0N1D_n1WAz_nQwK5H5kscAeFEPPhblge6m8socuWwoEyVWQwNdhWNDVPXScy-JVzGNdLX_83lz23qJb9WLVTW55woA4VKFwYHxWJBl8HHyVT8vdsirPU1khvy8WlQSSGGJjEXT7M-bJGKf3UQYavYswb2puOZ3NSWUHFM717sRpCTrI9JAoZRLbj5vm_EmlXY6jjSEO5EE5XV2f-vd_Fl6c72BgT9PEYRysLKY2QneAZodQ83ZkldMbZXT940lllDcJCDuSr01dNYUad_OYjXSxPCZAFo6sKDoHisHIYttbgr5ovcOvm27mB9BkfPhJMxz1EL-xQrCDm3zh_-Kb3jUL2uv7S6V7HRyrRVgFUmzS9g0UAAGhD9xtDBb6JinNyKEFmLgkYk6gVgV41vdW9ytIYMw2g3DeJQZb1dqLI2ta6XgyDcSB_o9-vqltwG40pwGB_8ITqcF5fpJtlDL7ZJTq9FDpXFj-ovZ063tjiABQom1iObHnxnL-Sivut19vWQwU-rpElMB2H3zZob_jqkWM86ZcCZxc5Z_RgzB2hUX3rM1BNy3-BMvh3FFr9V8GgDJCdKugeDCXNDU8g_D1Tu1pWT-pP1JbvnjRqg0kNtx0vBi4a20fCb3pOEopWRxynkRojQfYh1TFMs54ZIfHvzYkfJMrT2l4s0zdFnT9rCkpz6pmj0Y-1KE9rQ5WVjfFzcOWre78dtq-u75z-TZrEidYuWpfG2s5WH3Pzz8GoqSj0hsp0agfWJysYG-ngIEfg8ZI2-CD-M_DeWht2sr61K6Z6ppGnbJFWyLkQ8Qe2BGQEh5NTpUwvyp-iCjh9CasJvtC-sFZvLbT1YHd115eyBDJckCXzO-mmEhHNY4sSFXrMwcCO9-SIhferXpuqExlMKW5O1lTjIREfdG0NuuWymDDmroDzj7ob2g_Dw7_2t2wRbb79eju91BACv6ZHf9MZ9oR6uSBM3QXwGbOAVEWR9mYRZwd8YzcCnTrVACxximxn9Yt=s1024'; // Reemplaza con el enlace directo a tu imagen

    return (
        <div className="welcome-container">
            <h1>¡Bienvenido a nuestra tienda de autos!</h1>
            <p>Explora nuestra increíble selección de autos de lujo.</p>
            <img src={logoUrl} alt="Logo de Bienvenida" style={{ width: '500px', height: 'auto', marginTop: '20px' }} />
        </div>
    );
};

export default Welcome;