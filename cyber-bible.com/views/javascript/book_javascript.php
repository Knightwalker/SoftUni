<div id="javascript_grid">

  <div id="left">
    <div>Introduction</div>
    <div>Values, Types and Operators</div>
  </div>

  <div id="main">
    <div>
      <p>II. Values, Types and Operators</p>
    </div>
    <div>      
      <div>II.1. Values</div>
      <div>II.1. Data Types</div>
      <p>The EcmaScript 5'th specification defines five primitive data types and the "Object".</p>
      <ul>
      <span>Primitive Data Types:<span>
      <li>Boolean - In computer science, a Boolean is a logical data type that can have only the values true or false.</li>
      <li>Null - In computer science, a null value represents a reference that points, generally intentionally, to a nonexistent or invalid object or address. The meaning of a null reference varies among language implementations.</li>
      <li>Undefined - In JavaScript this is a primitive value automatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments.</li>
      <li>Number - In JavaScript, Number is a numeric data type in the double-precision 64-bit floating point format (IEEE 754). In other programming languages different numeric types can exist, for examples: Integers, Floats, Doubles, or Bignums.</li>
      <li>String - In JavaScript, a String is one of the primitive values and the String object is a wrapper around a String primitive. In any computer programming language, a string is a sequence of characters used to represent text.</li>
      <br/>
      <span>The Object Data Type:<span>
      </ul>
      <div>II.1.1. Numbers</div>
      <p>JavaScript uses a fixed number of bits, 64 of them, to store a single number value. There are only so many patterns you can make with 64 bits, which means that the number of different numbers that can be represented is limited. With N decimal digits, you can represent 10N numbers. Similarly, given 64 binary digits, you can represent 264 different numbers, which is about 18 quintillion (an 18 with 18 zeros after it). That’s a lot.</p>
      <p>Computer memory used to be much smaller, and people tended to use groups of 8 or 16 bits to represent their numbers. It was easy to accidentally overflow such small numbers—to end up with a number that did not fit into the given number of bits. Today, even computers that fit in your pocket have plenty of memory, so you are free to use 64-bit chunks, and you need to worry about overflow only when dealing with truly astronomical numbers.</p>
      <p>Not all whole numbers less than 18 quintillion fit in a JavaScript number, though. Those bits also store negative numbers, so one bit indicates the sign of the number. A bigger issue is that nonwhole numbers must also be represented. To do this, some of the bits are used to store the position of the decimal point. The actual maximum whole number that can be stored is more in the range of 9 quadrillion (15 zeros)—which is still pleasantly huge.</p>
      <div><b>Arithmetic</b></div>
      <p>The main thing to do with numbers is arithmetic.</p>
      <div class="gridbox_head gridbox">
        <div>Input</div>
        <div>Output</div>
        <div>Comments</div>
      </div>
      <div class="gridbox">
        <div>1 - 2 + 1</div>
        <div>0</div>
        <div>When operators appear together without parentheses, the order in which they are applied is determined by the precedence of the operators. The example shows that multiplication comes before addition. The / operator has the same precedence as *. Likewise for + and -. When multiple operators with the same precedence appear next to each other, as in 1 - 2 + 1, they are applied left to right: (1 - 2) + 1.</div>
      </div>
      <div class="gridbox">
        <div>314 % 100</div>
        <div>14</div>
        <div>There is one more arithmetic operator, which you might not immediately recognize. The % symbol is used to represent the remainder operation. X % Y is the remainder of dividing X by Y. For example, 314 % 100 produces 14, and 144 % 12 gives 0. The remainder operator’s precedence is the same as that of multiplication and division. You’ll also often see this operator referred to as modulo.</div>
      </div>
      <div class="gridbox">
        <div>7.998e8 + 6.002e8</div>
        <div>1400000000</div>
        <div>For very big or very small numbers, you may also use scientific notation by adding an e (for exponent), followed by the exponent of the number. 7.998e8 + 6.002e8 = 7.998 x 10<sup>14</sup> + 6.002 x 10<sup>14</sup> = 1400000000</div>
      </div>
      <div class="gridbox">
        <div>14 / 0</div>
        <div>Infinity</div>
        <div>There are three special values in JavaScript that are considered numbers but don’t behave like normal numbers. The first two are Infinity and -Infinity, which represent the positive and negative infinities. Infinity - 1 is still Infinity, and so on. Don’t put too much trust in infinity-based computation, though. It isn’t mathematically sound, and it will quickly lead to the next special number: NaN.</div>
      </div>
      <div class="gridbox">
        <div>0 / 0</div>
        <div>NaN</div>
        <div>NaN stands for “not a number”, even though it is a value of the number type. You’ll get this result when you, for example, try to calculate 0 / 0 (zero divided by zero), Infinity - Infinity, or any number of other numeric operations that don’t yield a meaningful result.</div>
      </div>
    </div>
  </div>

</div>


